# `dataOciDataintegrationWorkspaceApplicationPatches` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationPatches` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationPatches <a name="DataOciDataintegrationWorkspaceApplicationPatches" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches oci_dataintegration_workspace_application_patches}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceApplicationPatchesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig">DataOciDataintegrationWorkspaceApplicationPatchesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig">DataOciDataintegrationWorkspaceApplicationPatchesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataintegrationWorkspaceApplicationPatchesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationPatches resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationPatches resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationPatches to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataintegrationWorkspaceApplicationPatches that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationPatches to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList">DataOciDataintegrationWorkspaceApplicationPatchesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.patchSummaryCollection">patchSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKeyInput">applicationKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fieldsInput">fieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifierInput">identifierInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fields">fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifier">identifier</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filter"></a>

```typescript
public readonly filter: DataOciDataintegrationWorkspaceApplicationPatchesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList">DataOciDataintegrationWorkspaceApplicationPatchesFilterList</a>

---

##### `patchSummaryCollection`<sup>Required</sup> <a name="patchSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.patchSummaryCollection"></a>

```typescript
public readonly patchSummaryCollection: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList</a>

---

##### `applicationKeyInput`<sup>Optional</sup> <a name="applicationKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKeyInput"></a>

```typescript
public readonly applicationKeyInput: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataintegrationWorkspaceApplicationPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifierInput"></a>

```typescript
public readonly identifierInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.identifier"></a>

```typescript
public readonly identifier: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatches.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationPatchesConfig <a name="DataOciDataintegrationWorkspaceApplicationPatchesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesConfig: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.applicationKey">applicationKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.fields">fields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.identifier">identifier</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#application_key DataOciDataintegrationWorkspaceApplicationPatches#application_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#workspace_id DataOciDataintegrationWorkspaceApplicationPatches#workspace_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.fields"></a>

```typescript
public readonly fields: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#fields DataOciDataintegrationWorkspaceApplicationPatches#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataintegrationWorkspaceApplicationPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#filter DataOciDataintegrationWorkspaceApplicationPatches#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#id DataOciDataintegrationWorkspaceApplicationPatches#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.identifier"></a>

```typescript
public readonly identifier: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#identifier DataOciDataintegrationWorkspaceApplicationPatches#identifier}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}.

---

### DataOciDataintegrationWorkspaceApplicationPatchesFilter <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesFilter: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#values DataOciDataintegrationWorkspaceApplicationPatches#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#regex DataOciDataintegrationWorkspaceApplicationPatches#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#name DataOciDataintegrationWorkspaceApplicationPatches#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#values DataOciDataintegrationWorkspaceApplicationPatches#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_patches#regex DataOciDataintegrationWorkspaceApplicationPatches#regex}.

---

### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata = { ... }
```


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata: dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationPatchesFilterList <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataintegrationWorkspaceApplicationPatchesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>[]

---


### DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataintegrationWorkspaceApplicationPatchesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesFilter">DataOciDataintegrationWorkspaceApplicationPatchesFilter</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath">namePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.namePath"></a>

```typescript
public readonly namePath: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">objectCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```typescript
public readonly objectCount: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">objectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `objectTypeCountList`<sup>Required</sup> <a name="objectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```typescript
public readonly objectTypeCountList: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregator">aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.countStatistics">countStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdByName">createdByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.identifierPath">identifierPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.infoFields">infoFields</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedByName">updatedByName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregator`<sup>Required</sup> <a name="aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```typescript
public readonly aggregator: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `countStatistics`<sup>Required</sup> <a name="countStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```typescript
public readonly countStatistics: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createdByName`<sup>Required</sup> <a name="createdByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```typescript
public readonly createdByName: string;
```

- *Type:* string

---

##### `identifierPath`<sup>Required</sup> <a name="identifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```typescript
public readonly identifierPath: string;
```

- *Type:* string

---

##### `infoFields`<sup>Required</sup> <a name="infoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```typescript
public readonly infoFields: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updatedByName`<sup>Required</sup> <a name="updatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```typescript
public readonly updatedByName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationKey">applicationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationVersion">applicationVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.dependentObjectMetadata">dependentObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.errorMessages">errorMessages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.keyMap">keyMap</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectKeys">objectKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectStatus">objectStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.parentRef">parentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchObjectMetadata">patchObjectMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchStatus">patchStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchType">patchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.registryMetadata">registryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.timePatched">timePatched</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationKey`<sup>Required</sup> <a name="applicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```typescript
public readonly applicationKey: string;
```

- *Type:* string

---

##### `applicationVersion`<sup>Required</sup> <a name="applicationVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.applicationVersion"></a>

```typescript
public readonly applicationVersion: number;
```

- *Type:* number

---

##### `dependentObjectMetadata`<sup>Required</sup> <a name="dependentObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.dependentObjectMetadata"></a>

```typescript
public readonly dependentObjectMetadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsDependentObjectMetadataList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.errorMessages"></a>

```typescript
public readonly errorMessages: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyMap`<sup>Required</sup> <a name="keyMap" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.keyMap"></a>

```typescript
public readonly keyMap: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsMetadataList</a>

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectKeys`<sup>Required</sup> <a name="objectKeys" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectKeys"></a>

```typescript
public readonly objectKeys: string[];
```

- *Type:* string[]

---

##### `objectStatus`<sup>Required</sup> <a name="objectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```typescript
public readonly objectStatus: number;
```

- *Type:* number

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `parentRef`<sup>Required</sup> <a name="parentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.parentRef"></a>

```typescript
public readonly parentRef: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList</a>

---

##### `patchObjectMetadata`<sup>Required</sup> <a name="patchObjectMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchObjectMetadata"></a>

```typescript
public readonly patchObjectMetadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList</a>

---

##### `patchStatus`<sup>Required</sup> <a name="patchStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchStatus"></a>

```typescript
public readonly patchStatus: string;
```

- *Type:* string

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.patchType"></a>

```typescript
public readonly patchType: string;
```

- *Type:* string

---

##### `registryMetadata`<sup>Required</sup> <a name="registryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```typescript
public readonly registryMetadata: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList</a>

---

##### `timePatched`<sup>Required</sup> <a name="timePatched" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.timePatched"></a>

```typescript
public readonly timePatched: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.rootDocId">rootDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `rootDocId`<sup>Required</sup> <a name="rootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```typescript
public readonly rootDocId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.namePath">namePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.objectVersion">objectVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.namePath"></a>

```typescript
public readonly namePath: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsPatchObjectMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">isFavorite</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">registryVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `isFavorite`<sup>Required</sup> <a name="isFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```typescript
public readonly isFavorite: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: string[];
```

- *Type:* string[]

---

##### `registryVersion`<sup>Required</sup> <a name="registryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```typescript
public readonly registryVersion: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceApplicationPatches } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationPatches.DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection">DataOciDataintegrationWorkspaceApplicationPatchesPatchSummaryCollection</a>

---



