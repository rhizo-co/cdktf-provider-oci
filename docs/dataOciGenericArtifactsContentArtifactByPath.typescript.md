# `dataOciGenericArtifactsContentArtifactByPath` Submodule <a name="`dataOciGenericArtifactsContentArtifactByPath` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenericArtifactsContentArtifactByPath <a name="DataOciGenericArtifactsContentArtifactByPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path oci_generic_artifacts_content_artifact_by_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

new dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath(scope: Construct, id: string, config: DataOciGenericArtifactsContentArtifactByPathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig">DataOciGenericArtifactsContentArtifactByPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig">DataOciGenericArtifactsContentArtifactByPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenericArtifactsContentArtifactByPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenericArtifactsContentArtifactByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenericArtifactsContentArtifactByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenericArtifactsContentArtifactByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId">artifactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256">sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput">artifactPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput">repositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath">artifactPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId">repositoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sha256"></a>

```typescript
public readonly sha256: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `artifactPathInput`<sup>Optional</sup> <a name="artifactPathInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPathInput"></a>

```typescript
public readonly artifactPathInput: string;
```

- *Type:* string

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryIdInput"></a>

```typescript
public readonly repositoryIdInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPath.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenericArtifactsContentArtifactByPathConfig <a name="DataOciGenericArtifactsContentArtifactByPathConfig" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.Initializer"></a>

```typescript
import { dataOciGenericArtifactsContentArtifactByPath } from 'rhizo-co-terraform-provider-oci'

const dataOciGenericArtifactsContentArtifactByPathConfig: dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath">artifactPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId">repositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactPath`<sup>Required</sup> <a name="artifactPath" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.artifactPath"></a>

```typescript
public readonly artifactPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#artifact_path DataOciGenericArtifactsContentArtifactByPath#artifact_path}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.repositoryId"></a>

```typescript
public readonly repositoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#repository_id DataOciGenericArtifactsContentArtifactByPath#repository_id}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciGenericArtifactsContentArtifactByPath.DataOciGenericArtifactsContentArtifactByPathConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generic_artifacts_content_artifact_by_path#version DataOciGenericArtifactsContentArtifactByPath#version}.

---



