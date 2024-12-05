# `dataOciWaaWebAppAccelerationPolicies` Submodule <a name="`dataOciWaaWebAppAccelerationPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicies <a name="DataOciWaaWebAppAccelerationPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies oci_waa_web_app_acceleration_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies(scope: Construct, id: string, config: DataOciWaaWebAppAccelerationPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig">DataOciWaaWebAppAccelerationPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWaaWebAppAccelerationPoliciesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWaaWebAppAccelerationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection">webAppAccelerationPolicyCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput">stateInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state">state</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filter"></a>

```typescript
public readonly filter: DataOciWaaWebAppAccelerationPoliciesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList">DataOciWaaWebAppAccelerationPoliciesFilterList</a>

---

##### `webAppAccelerationPolicyCollection`<sup>Required</sup> <a name="webAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.webAppAccelerationPolicyCollection"></a>

```typescript
public readonly webAppAccelerationPolicyCollection: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWaaWebAppAccelerationPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.stateInput"></a>

```typescript
public readonly stateInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPoliciesConfig <a name="DataOciWaaWebAppAccelerationPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesConfig: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state">state</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#compartment_id DataOciWaaWebAppAccelerationPolicies#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#display_name DataOciWaaWebAppAccelerationPolicies#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWaaWebAppAccelerationPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#filter DataOciWaaWebAppAccelerationPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#id DataOciWaaWebAppAccelerationPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesConfig.property.state"></a>

```typescript
public readonly state: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#state DataOciWaaWebAppAccelerationPolicies#state}.

---

### DataOciWaaWebAppAccelerationPoliciesFilter <a name="DataOciWaaWebAppAccelerationPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesFilter: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#name DataOciWaaWebAppAccelerationPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#values DataOciWaaWebAppAccelerationPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policies#regex DataOciWaaWebAppAccelerationPolicies#regex}.

---

### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection = { ... }
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems = { ... }
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy = { ... }
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy = { ... }
```


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

const dataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression: dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPoliciesFilterList <a name="DataOciWaaWebAppAccelerationPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWaaWebAppAccelerationPoliciesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>[]

---


### DataOciWaaWebAppAccelerationPoliciesFilterOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWaaWebAppAccelerationPoliciesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesFilter">DataOciWaaWebAppAccelerationPoliciesFilter</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy">responseCachingPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy">responseCompressionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `responseCachingPolicy`<sup>Required</sup> <a name="responseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCachingPolicy"></a>

```typescript
public readonly responseCachingPolicy: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList</a>

---

##### `responseCompressionPolicy`<sup>Required</sup> <a name="responseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.responseCompressionPolicy"></a>

```typescript
public readonly responseCompressionPolicy: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItems</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">isResponseHeaderBasedCachingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isResponseHeaderBasedCachingEnabled`<sup>Required</sup> <a name="isResponseHeaderBasedCachingEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```typescript
public readonly isResponseHeaderBasedCachingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression">gzipCompression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gzipCompression`<sup>Required</sup> <a name="gzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```typescript
public readonly gzipCompression: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyGzipCompressionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsResponseCompressionPolicy</a>

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get"></a>

```typescript
public get(index: number): DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference <a name="DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciWaaWebAppAccelerationPolicies } from 'rhizo-co-terraform-provider-oci'

new dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicies.DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection">DataOciWaaWebAppAccelerationPoliciesWebAppAccelerationPolicyCollection</a>

---



