# `dataOciDataintegrationWorkspaceImportRequest` Submodule <a name="`dataOciDataintegrationWorkspaceImportRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceImportRequest <a name="DataOciDataintegrationWorkspaceImportRequest" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request oci_dataintegration_workspace_import_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceImportRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig">DataOciDataintegrationWorkspaceImportRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceImportRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceImportRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataintegrationWorkspaceImportRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceImportRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded">areDataAssetReferencesIncluded</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages">errorMessages</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution">importConflictResolution</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects">importedObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport">objectKeyForImport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion">objectStorageRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId">objectStorageTenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis">timeEndedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis">timeStartedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount">totalImportedObjectCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput">importRequestKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey">importRequestKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `areDataAssetReferencesIncluded`<sup>Required</sup> <a name="areDataAssetReferencesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.areDataAssetReferencesIncluded"></a>

```typescript
public readonly areDataAssetReferencesIncluded: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `errorMessages`<sup>Required</sup> <a name="errorMessages" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.errorMessages"></a>

```typescript
public readonly errorMessages: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importConflictResolution`<sup>Required</sup> <a name="importConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importConflictResolution"></a>

```typescript
public readonly importConflictResolution: DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList">DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList</a>

---

##### `importedObjects`<sup>Required</sup> <a name="importedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importedObjects"></a>

```typescript
public readonly importedObjects: DataOciDataintegrationWorkspaceImportRequestImportedObjectsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList">DataOciDataintegrationWorkspaceImportRequestImportedObjectsList</a>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectKeyForImport`<sup>Required</sup> <a name="objectKeyForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectKeyForImport"></a>

```typescript
public readonly objectKeyForImport: string;
```

- *Type:* string

---

##### `objectStorageRegion`<sup>Required</sup> <a name="objectStorageRegion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageRegion"></a>

```typescript
public readonly objectStorageRegion: string;
```

- *Type:* string

---

##### `objectStorageTenancyId`<sup>Required</sup> <a name="objectStorageTenancyId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.objectStorageTenancyId"></a>

```typescript
public readonly objectStorageTenancyId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeEndedInMillis`<sup>Required</sup> <a name="timeEndedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeEndedInMillis"></a>

```typescript
public readonly timeEndedInMillis: string;
```

- *Type:* string

---

##### `timeStartedInMillis`<sup>Required</sup> <a name="timeStartedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.timeStartedInMillis"></a>

```typescript
public readonly timeStartedInMillis: string;
```

- *Type:* string

---

##### `totalImportedObjectCount`<sup>Required</sup> <a name="totalImportedObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.totalImportedObjectCount"></a>

```typescript
public readonly totalImportedObjectCount: number;
```

- *Type:* number

---

##### `importRequestKeyInput`<sup>Optional</sup> <a name="importRequestKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKeyInput"></a>

```typescript
public readonly importRequestKeyInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `importRequestKey`<sup>Required</sup> <a name="importRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.importRequestKey"></a>

```typescript
public readonly importRequestKey: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceImportRequestConfig <a name="DataOciDataintegrationWorkspaceImportRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceImportRequestConfig: dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey">importRequestKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `importRequestKey`<sup>Required</sup> <a name="importRequestKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.importRequestKey"></a>

```typescript
public readonly importRequestKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#import_request_key DataOciDataintegrationWorkspaceImportRequest#import_request_key}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_import_request#workspace_id DataOciDataintegrationWorkspaceImportRequest#workspace_id}.

---

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolution <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolution" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceImportRequestImportConflictResolution: dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution = { ... }
```


### DataOciDataintegrationWorkspaceImportRequestImportedObjects <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

const dataOciDataintegrationWorkspaceImportRequestImportedObjects: dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix">duplicatePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix">duplicateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType">importConflictResolutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `duplicatePrefix`<sup>Required</sup> <a name="duplicatePrefix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicatePrefix"></a>

```typescript
public readonly duplicatePrefix: string;
```

- *Type:* string

---

##### `duplicateSuffix`<sup>Required</sup> <a name="duplicateSuffix" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.duplicateSuffix"></a>

```typescript
public readonly duplicateSuffix: string;
```

- *Type:* string

---

##### `importConflictResolutionType`<sup>Required</sup> <a name="importConflictResolutionType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.importConflictResolutionType"></a>

```typescript
public readonly importConflictResolutionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolutionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceImportRequestImportConflictResolution;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportConflictResolution">DataOciDataintegrationWorkspaceImportRequestImportConflictResolution</a>

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsList <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get"></a>

```typescript
public get(index: number): DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference <a name="DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer"></a>

```typescript
import { dataOciDataintegrationWorkspaceImportRequest } from 'rhizo-co-terraform-provider-oci'

new dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey">aggregatorKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath">namePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey">newKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion">objectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey">oldKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction">resolutionAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis">timeUpdatedInMillis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregatorKey`<sup>Required</sup> <a name="aggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.aggregatorKey"></a>

```typescript
public readonly aggregatorKey: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePath`<sup>Required</sup> <a name="namePath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.namePath"></a>

```typescript
public readonly namePath: string;
```

- *Type:* string

---

##### `newKey`<sup>Required</sup> <a name="newKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.newKey"></a>

```typescript
public readonly newKey: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.objectVersion"></a>

```typescript
public readonly objectVersion: string;
```

- *Type:* string

---

##### `oldKey`<sup>Required</sup> <a name="oldKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.oldKey"></a>

```typescript
public readonly oldKey: string;
```

- *Type:* string

---

##### `resolutionAction`<sup>Required</sup> <a name="resolutionAction" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.resolutionAction"></a>

```typescript
public readonly resolutionAction: string;
```

- *Type:* string

---

##### `timeUpdatedInMillis`<sup>Required</sup> <a name="timeUpdatedInMillis" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.timeUpdatedInMillis"></a>

```typescript
public readonly timeUpdatedInMillis: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataintegrationWorkspaceImportRequestImportedObjects;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceImportRequest.DataOciDataintegrationWorkspaceImportRequestImportedObjects">DataOciDataintegrationWorkspaceImportRequestImportedObjects</a>

---



