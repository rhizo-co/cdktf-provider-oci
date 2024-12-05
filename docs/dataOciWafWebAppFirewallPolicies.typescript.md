# `dataOciWafWebAppFirewallPolicies` Submodule <a name="`dataOciWafWebAppFirewallPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafWebAppFirewallPolicies <a name="DataOciWafWebAppFirewallPolicies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies oci_waf_web_app_firewall_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies(scope: Construct, id: string, config: DataOciWafWebAppFirewallPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig">DataOciWafWebAppFirewallPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig">DataOciWafWebAppFirewallPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWafWebAppFirewallPoliciesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafWebAppFirewallPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafWebAppFirewallPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafWebAppFirewallPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection">webAppFirewallPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filter"></a>

```typescript
public readonly filter: DataOciWafWebAppFirewallPoliciesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList">DataOciWafWebAppFirewallPoliciesFilterList</a>

---

##### `webAppFirewallPolicyCollection`<sup>Required</sup> <a name="webAppFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.webAppFirewallPolicyCollection"></a>

```typescript
public readonly webAppFirewallPolicyCollection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWafWebAppFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafWebAppFirewallPoliciesConfig <a name="DataOciWafWebAppFirewallPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesConfig: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#compartment_id DataOciWafWebAppFirewallPolicies#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#display_name DataOciWafWebAppFirewallPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWafWebAppFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#filter DataOciWafWebAppFirewallPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#id DataOciWafWebAppFirewallPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#state DataOciWafWebAppFirewallPolicies#state}.

---

### DataOciWafWebAppFirewallPoliciesFilter <a name="DataOciWafWebAppFirewallPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesFilter: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#name DataOciWafWebAppFirewallPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#values DataOciWafWebAppFirewallPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_web_app_firewall_policies#regex DataOciWafWebAppFirewallPolicies#regex}.

---

### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions = { ... }
```


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings: dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafWebAppFirewallPoliciesFilterList <a name="DataOciWafWebAppFirewallPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafWebAppFirewallPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>[]

---


### DataOciWafWebAppFirewallPoliciesFilterOutputReference <a name="DataOciWafWebAppFirewallPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafWebAppFirewallPoliciesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesFilter">DataOciWafWebAppFirewallPoliciesFilter</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template">template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `template`<sup>Required</sup> <a name="template" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.template"></a>

```typescript
public readonly template: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBody</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeaders</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body">body</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers">headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `body`<sup>Required</sup> <a name="body" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.body"></a>

```typescript
public readonly body: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsBodyList</a>

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.headers"></a>

```typescript
public readonly headers: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsHeadersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl">requestAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection">requestProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting">requestRateLimiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl">responseAccessControl</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection">responseProtection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.actions"></a>

```typescript
public readonly actions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsActionsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `requestAccessControl`<sup>Required</sup> <a name="requestAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestAccessControl"></a>

```typescript
public readonly requestAccessControl: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList</a>

---

##### `requestProtection`<sup>Required</sup> <a name="requestProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestProtection"></a>

```typescript
public readonly requestProtection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList</a>

---

##### `requestRateLimiting`<sup>Required</sup> <a name="requestRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.requestRateLimiting"></a>

```typescript
public readonly requestRateLimiting: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList</a>

---

##### `responseAccessControl`<sup>Required</sup> <a name="responseAccessControl" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseAccessControl"></a>

```typescript
public readonly responseAccessControl: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList</a>

---

##### `responseProtection`<sup>Required</sup> <a name="responseProtection" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.responseProtection"></a>

```typescript
public readonly responseProtection: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItems</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName">defaultActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultActionName`<sup>Required</sup> <a name="defaultActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.defaultActionName"></a>

```typescript
public readonly defaultActionName: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName">bodyInspectionSizeLimitExceededActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes">bodyInspectionSizeLimitInBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bodyInspectionSizeLimitExceededActionName`<sup>Required</sup> <a name="bodyInspectionSizeLimitExceededActionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitExceededActionName"></a>

```typescript
public readonly bodyInspectionSizeLimitExceededActionName: string;
```

- *Type:* string

---

##### `bodyInspectionSizeLimitInBytes`<sup>Required</sup> <a name="bodyInspectionSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.bodyInspectionSizeLimitInBytes"></a>

```typescript
public readonly bodyInspectionSizeLimitInBytes: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```typescript
public readonly isBodyInspectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilities"></a>

```typescript
public readonly protectionCapabilities: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```typescript
public readonly protectionCapabilitySettings: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```typescript
public readonly requestCookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```typescript
public readonly collaborativeActionThreshold: number;
```

- *Type:* number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```typescript
public readonly collaborativeWeights: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string[];
```

- *Type:* string[]

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```typescript
public readonly maxHttpRequestHeaderLength: number;
```

- *Type:* number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```typescript
public readonly maxHttpRequestHeaders: number;
```

- *Type:* number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```typescript
public readonly maxNumberOfArguments: number;
```

- *Type:* number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```typescript
public readonly maxSingleArgumentLength: number;
```

- *Type:* number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```typescript
public readonly maxTotalArgumentLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimiting</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds">actionDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds">periodInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit">requestsLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionDurationInSeconds`<sup>Required</sup> <a name="actionDurationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.actionDurationInSeconds"></a>

```typescript
public readonly actionDurationInSeconds: number;
```

- *Type:* number

---

##### `periodInSeconds`<sup>Required</sup> <a name="periodInSeconds" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.periodInSeconds"></a>

```typescript
public readonly periodInSeconds: number;
```

- *Type:* number

---

##### `requestsLimit`<sup>Required</sup> <a name="requestsLimit" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.requestsLimit"></a>

```typescript
public readonly requestsLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurations</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.configurations"></a>

```typescript
public readonly configurations: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesConfigurationsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsRequestRateLimitingRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControl</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseAccessControlRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.rules"></a>

```typescript
public readonly rules: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtection</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage">conditionLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled">isBodyInspectionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities">protectionCapabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings">protectionCapabilitySettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `conditionLanguage`<sup>Required</sup> <a name="conditionLanguage" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.conditionLanguage"></a>

```typescript
public readonly conditionLanguage: string;
```

- *Type:* string

---

##### `isBodyInspectionEnabled`<sup>Required</sup> <a name="isBodyInspectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.isBodyInspectionEnabled"></a>

```typescript
public readonly isBodyInspectionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionCapabilities`<sup>Required</sup> <a name="protectionCapabilities" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilities"></a>

```typescript
public readonly protectionCapabilities: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList</a>

---

##### `protectionCapabilitySettings`<sup>Required</sup> <a name="protectionCapabilitySettings" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.protectionCapabilitySettings"></a>

```typescript
public readonly protectionCapabilitySettings: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRules</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies">requestCookies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `requestCookies`<sup>Required</sup> <a name="requestCookies" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.requestCookies"></a>

```typescript
public readonly requestCookies: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusions</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName">actionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold">collaborativeActionThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights">collaborativeWeights</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

---

##### `collaborativeActionThreshold`<sup>Required</sup> <a name="collaborativeActionThreshold" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeActionThreshold"></a>

```typescript
public readonly collaborativeActionThreshold: number;
```

- *Type:* number

---

##### `collaborativeWeights`<sup>Required</sup> <a name="collaborativeWeights" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.collaborativeWeights"></a>

```typescript
public readonly collaborativeWeights: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList</a>

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesExclusionsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilities</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength">maxHttpRequestHeaderLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders">maxHttpRequestHeaders</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments">maxNumberOfArguments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength">maxSingleArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength">maxTotalArgumentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string[];
```

- *Type:* string[]

---

##### `maxHttpRequestHeaderLength`<sup>Required</sup> <a name="maxHttpRequestHeaderLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaderLength"></a>

```typescript
public readonly maxHttpRequestHeaderLength: number;
```

- *Type:* number

---

##### `maxHttpRequestHeaders`<sup>Required</sup> <a name="maxHttpRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxHttpRequestHeaders"></a>

```typescript
public readonly maxHttpRequestHeaders: number;
```

- *Type:* number

---

##### `maxNumberOfArguments`<sup>Required</sup> <a name="maxNumberOfArguments" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxNumberOfArguments"></a>

```typescript
public readonly maxNumberOfArguments: number;
```

- *Type:* number

---

##### `maxSingleArgumentLength`<sup>Required</sup> <a name="maxSingleArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxSingleArgumentLength"></a>

```typescript
public readonly maxSingleArgumentLength: number;
```

- *Type:* number

---

##### `maxTotalArgumentLength`<sup>Required</sup> <a name="maxTotalArgumentLength" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.maxTotalArgumentLength"></a>

```typescript
public readonly maxTotalArgumentLength: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsResponseProtectionRulesProtectionCapabilitySettings</a>

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get"></a>

```typescript
public get(index: number): DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference <a name="DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafWebAppFirewallPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafWebAppFirewallPolicies.DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection">DataOciWafWebAppFirewallPoliciesWebAppFirewallPolicyCollection</a>

---



