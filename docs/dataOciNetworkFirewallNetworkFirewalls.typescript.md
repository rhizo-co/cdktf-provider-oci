# `dataOciNetworkFirewallNetworkFirewalls` Submodule <a name="`dataOciNetworkFirewallNetworkFirewalls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewalls <a name="DataOciNetworkFirewallNetworkFirewalls" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls oci_network_firewall_network_firewalls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig">DataOciNetworkFirewallNetworkFirewallsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig">DataOciNetworkFirewallNetworkFirewallsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetNetworkFirewallPolicyId">resetNetworkFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciNetworkFirewallNetworkFirewallsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetworkFirewallPolicyId` <a name="resetNetworkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetNetworkFirewallPolicyId"></a>

```typescript
public resetNetworkFirewallPolicyId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewalls resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isConstruct"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformElement"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformDataSource"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewalls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewalls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkFirewallNetworkFirewalls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewalls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList">DataOciNetworkFirewallNetworkFirewallsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallCollection">networkFirewallCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.filter"></a>

```typescript
public readonly filter: DataOciNetworkFirewallNetworkFirewallsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList">DataOciNetworkFirewallNetworkFirewallsFilterList</a>

---

##### `networkFirewallCollection`<sup>Required</sup> <a name="networkFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallCollection"></a>

```typescript
public readonly networkFirewallCollection: DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciNetworkFirewallNetworkFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallPolicyIdInput"></a>

```typescript
public readonly networkFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewalls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallsConfig <a name="DataOciNetworkFirewallNetworkFirewallsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallsConfig: dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#compartment_id DataOciNetworkFirewallNetworkFirewalls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#availability_domain DataOciNetworkFirewallNetworkFirewalls#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#display_name DataOciNetworkFirewallNetworkFirewalls#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#id DataOciNetworkFirewallNetworkFirewalls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewalls#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#state DataOciNetworkFirewallNetworkFirewalls#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#compartment_id DataOciNetworkFirewallNetworkFirewalls#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#availability_domain DataOciNetworkFirewallNetworkFirewalls#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#display_name DataOciNetworkFirewallNetworkFirewalls#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciNetworkFirewallNetworkFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#filter DataOciNetworkFirewallNetworkFirewalls#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#id DataOciNetworkFirewallNetworkFirewalls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `networkFirewallPolicyId`<sup>Optional</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewalls#network_firewall_policy_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#state DataOciNetworkFirewallNetworkFirewalls#state}.

---

### DataOciNetworkFirewallNetworkFirewallsFilter <a name="DataOciNetworkFirewallNetworkFirewallsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallsFilter: dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#name DataOciNetworkFirewallNetworkFirewalls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#values DataOciNetworkFirewallNetworkFirewalls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#regex DataOciNetworkFirewallNetworkFirewalls#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#name DataOciNetworkFirewallNetworkFirewalls#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#values DataOciNetworkFirewallNetworkFirewalls#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewalls#regex DataOciNetworkFirewallNetworkFirewalls#regex}.

---

### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection: dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection = { ... }
```


### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems: dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallsFilterList <a name="DataOciNetworkFirewallNetworkFirewallsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkFirewallNetworkFirewallsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>[]

---


### DataOciNetworkFirewallNetworkFirewallsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkFirewallNetworkFirewallsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsFilter">DataOciNetworkFirewallNetworkFirewallsFilter</a>

---


### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.networkSecurityGroupIds">networkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `networkSecurityGroupIds`<sup>Required</sup> <a name="networkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.networkSecurityGroupIds"></a>

```typescript
public readonly networkSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewalls } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewalls.DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection">DataOciNetworkFirewallNetworkFirewallsNetworkFirewallCollection</a>

---



