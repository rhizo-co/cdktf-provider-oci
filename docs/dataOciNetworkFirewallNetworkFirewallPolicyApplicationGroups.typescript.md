# `dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups` Submodule <a name="`dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups oci_network_firewall_network_firewall_policy_application_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups(scope: Construct, id: string, config: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isConstruct"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformElement"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformDataSource"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.applicationGroupSummaryCollection">applicationGroupSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.networkFirewallPolicyIdInput">networkFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `applicationGroupSummaryCollection`<sup>Required</sup> <a name="applicationGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.applicationGroupSummaryCollection"></a>

```typescript
public readonly applicationGroupSummaryCollection: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.filter"></a>

```typescript
public readonly filter: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyIdInput`<sup>Optional</sup> <a name="networkFirewallPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.networkFirewallPolicyIdInput"></a>

```typescript
public readonly networkFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection: dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection = { ... }
```


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems: dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems = { ... }
```


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig: dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#network_firewall_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#display_name DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#id DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#network_firewall_policy_id DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#network_firewall_policy_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#display_name DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#filter DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#id DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter: dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#name DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#values DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#regex DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#name DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#values DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/network_firewall_network_firewall_policy_application_groups#regex DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.apps">apps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.parentResourceId">parentResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.totalApps">totalApps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apps`<sup>Required</sup> <a name="apps" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.apps"></a>

```typescript
public readonly apps: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `parentResourceId`<sup>Required</sup> <a name="parentResourceId" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.parentResourceId"></a>

```typescript
public readonly parentResourceId: string;
```

- *Type:* string

---

##### `totalApps`<sup>Required</sup> <a name="totalApps" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.totalApps"></a>

```typescript
public readonly totalApps: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItems</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsApplicationGroupSummaryCollection</a>

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>[]

---


### DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference <a name="DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciNetworkFirewallNetworkFirewallPolicyApplicationGroups.DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter">DataOciNetworkFirewallNetworkFirewallPolicyApplicationGroupsFilter</a>

---



