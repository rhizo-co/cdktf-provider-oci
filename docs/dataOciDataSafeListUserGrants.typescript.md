# `dataOciDataSafeListUserGrants` Submodule <a name="`dataOciDataSafeListUserGrants` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeListUserGrants <a name="DataOciDataSafeListUserGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants(scope: Construct, id: string, config: DataOciDataSafeListUserGrantsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel">resetDepthLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo">resetDepthLevelGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan">resetDepthLevelLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey">resetGrantKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName">resetGrantName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory">resetPrivilegeCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType">resetPrivilegeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeListUserGrantsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]

---

##### `resetDepthLevel` <a name="resetDepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel"></a>

```typescript
public resetDepthLevel(): void
```

##### `resetDepthLevelGreaterThanOrEqualTo` <a name="resetDepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo"></a>

```typescript
public resetDepthLevelGreaterThanOrEqualTo(): void
```

##### `resetDepthLevelLessThan` <a name="resetDepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan"></a>

```typescript
public resetDepthLevelLessThan(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGrantKey` <a name="resetGrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey"></a>

```typescript
public resetGrantKey(): void
```

##### `resetGrantName` <a name="resetGrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName"></a>

```typescript
public resetGrantName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivilegeCategory` <a name="resetPrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory"></a>

```typescript
public resetPrivilegeCategory(): void
```

##### `resetPrivilegeType` <a name="resetPrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType"></a>

```typescript
public resetPrivilegeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeListUserGrants to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeListUserGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants">grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput">depthLevelGreaterThanOrEqualToInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput">depthLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput">depthLevelLessThanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput">grantKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput">grantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput">privilegeCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput">privilegeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput">userAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput">userKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel">depthLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo">depthLevelGreaterThanOrEqualTo</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan">depthLevelLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey">grantKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName">grantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory">privilegeCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType">privilegeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey">userKey</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeListUserGrantsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a>

---

##### `grants`<sup>Required</sup> <a name="grants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants"></a>

```typescript
public readonly grants: DataOciDataSafeListUserGrantsGrantsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a>

---

##### `depthLevelGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="depthLevelGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput"></a>

```typescript
public readonly depthLevelGreaterThanOrEqualToInput: number;
```

- *Type:* number

---

##### `depthLevelInput`<sup>Optional</sup> <a name="depthLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput"></a>

```typescript
public readonly depthLevelInput: number;
```

- *Type:* number

---

##### `depthLevelLessThanInput`<sup>Optional</sup> <a name="depthLevelLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput"></a>

```typescript
public readonly depthLevelLessThanInput: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeListUserGrantsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]

---

##### `grantKeyInput`<sup>Optional</sup> <a name="grantKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput"></a>

```typescript
public readonly grantKeyInput: string;
```

- *Type:* string

---

##### `grantNameInput`<sup>Optional</sup> <a name="grantNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput"></a>

```typescript
public readonly grantNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privilegeCategoryInput`<sup>Optional</sup> <a name="privilegeCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput"></a>

```typescript
public readonly privilegeCategoryInput: string;
```

- *Type:* string

---

##### `privilegeTypeInput`<sup>Optional</sup> <a name="privilegeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput"></a>

```typescript
public readonly privilegeTypeInput: string;
```

- *Type:* string

---

##### `userAssessmentIdInput`<sup>Optional</sup> <a name="userAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput"></a>

```typescript
public readonly userAssessmentIdInput: string;
```

- *Type:* string

---

##### `userKeyInput`<sup>Optional</sup> <a name="userKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput"></a>

```typescript
public readonly userKeyInput: string;
```

- *Type:* string

---

##### `depthLevel`<sup>Required</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel"></a>

```typescript
public readonly depthLevel: number;
```

- *Type:* number

---

##### `depthLevelGreaterThanOrEqualTo`<sup>Required</sup> <a name="depthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo"></a>

```typescript
public readonly depthLevelGreaterThanOrEqualTo: number;
```

- *Type:* number

---

##### `depthLevelLessThan`<sup>Required</sup> <a name="depthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan"></a>

```typescript
public readonly depthLevelLessThan: number;
```

- *Type:* number

---

##### `grantKey`<sup>Required</sup> <a name="grantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey"></a>

```typescript
public readonly grantKey: string;
```

- *Type:* string

---

##### `grantName`<sup>Required</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName"></a>

```typescript
public readonly grantName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privilegeCategory`<sup>Required</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory"></a>

```typescript
public readonly privilegeCategory: string;
```

- *Type:* string

---

##### `privilegeType`<sup>Required</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType"></a>

```typescript
public readonly privilegeType: string;
```

- *Type:* string

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeListUserGrantsConfig <a name="DataOciDataSafeListUserGrantsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeListUserGrantsConfig: dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId">userAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey">userKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel">depthLevel</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo">depthLevelGreaterThanOrEqualTo</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan">depthLevelLessThan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey">grantKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName">grantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory">privilegeCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType">privilegeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `userAssessmentId`<sup>Required</sup> <a name="userAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId"></a>

```typescript
public readonly userAssessmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `userKey`<sup>Required</sup> <a name="userKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey"></a>

```typescript
public readonly userKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `depthLevel`<sup>Optional</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel"></a>

```typescript
public readonly depthLevel: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `depthLevelGreaterThanOrEqualTo`<sup>Optional</sup> <a name="depthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo"></a>

```typescript
public readonly depthLevelGreaterThanOrEqualTo: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `depthLevelLessThan`<sup>Optional</sup> <a name="depthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan"></a>

```typescript
public readonly depthLevelLessThan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeListUserGrantsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `grantKey`<sup>Optional</sup> <a name="grantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey"></a>

```typescript
public readonly grantKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `grantName`<sup>Optional</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName"></a>

```typescript
public readonly grantName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilegeCategory`<sup>Optional</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory"></a>

```typescript
public readonly privilegeCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `privilegeType`<sup>Optional</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType"></a>

```typescript
public readonly privilegeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

### DataOciDataSafeListUserGrantsFilter <a name="DataOciDataSafeListUserGrantsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeListUserGrantsFilter: dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}.

---

### DataOciDataSafeListUserGrantsGrants <a name="DataOciDataSafeListUserGrantsGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeListUserGrantsGrants: dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeListUserGrantsFilterList <a name="DataOciDataSafeListUserGrantsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeListUserGrantsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeListUserGrantsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>[]

---


### DataOciDataSafeListUserGrantsFilterOutputReference <a name="DataOciDataSafeListUserGrantsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeListUserGrantsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter">DataOciDataSafeListUserGrantsFilter</a>

---


### DataOciDataSafeListUserGrantsGrantsList <a name="DataOciDataSafeListUserGrantsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeListUserGrantsGrantsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeListUserGrantsGrantsOutputReference <a name="DataOciDataSafeListUserGrantsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeListUserGrants } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel">depthLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName">grantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory">privilegeCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType">privilegeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `depthLevel`<sup>Required</sup> <a name="depthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel"></a>

```typescript
public readonly depthLevel: number;
```

- *Type:* number

---

##### `grantName`<sup>Required</sup> <a name="grantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName"></a>

```typescript
public readonly grantName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `privilegeCategory`<sup>Required</sup> <a name="privilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory"></a>

```typescript
public readonly privilegeCategory: string;
```

- *Type:* string

---

##### `privilegeType`<sup>Required</sup> <a name="privilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType"></a>

```typescript
public readonly privilegeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeListUserGrantsGrants;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a>

---



