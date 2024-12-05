# `dataOciDataLabelingServiceAnnotationFormats` Submodule <a name="`dataOciDataLabelingServiceAnnotationFormats` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceAnnotationFormats <a name="DataOciDataLabelingServiceAnnotationFormats" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats oci_data_labeling_service_annotation_formats}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats(scope: Construct, id: string, config: DataOciDataLabelingServiceAnnotationFormatsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig">DataOciDataLabelingServiceAnnotationFormatsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataLabelingServiceAnnotationFormatsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormats resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataLabelingServiceAnnotationFormats to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataLabelingServiceAnnotationFormats that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceAnnotationFormats to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection">annotationFormatCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `annotationFormatCollection`<sup>Required</sup> <a name="annotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.annotationFormatCollection"></a>

```typescript
public readonly annotationFormatCollection: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filter"></a>

```typescript
public readonly filter: DataOciDataLabelingServiceAnnotationFormatsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList">DataOciDataLabelingServiceAnnotationFormatsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataLabelingServiceAnnotationFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormats.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection: dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection = { ... }
```


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems: dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems = { ... }
```


### DataOciDataLabelingServiceAnnotationFormatsConfig <a name="DataOciDataLabelingServiceAnnotationFormatsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatsConfig: dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#compartment_id DataOciDataLabelingServiceAnnotationFormats#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataLabelingServiceAnnotationFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#filter DataOciDataLabelingServiceAnnotationFormats#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#id DataOciDataLabelingServiceAnnotationFormats#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataLabelingServiceAnnotationFormatsFilter <a name="DataOciDataLabelingServiceAnnotationFormatsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatsFilter: dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#name DataOciDataLabelingServiceAnnotationFormats#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#values DataOciDataLabelingServiceAnnotationFormats#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_formats#regex DataOciDataLabelingServiceAnnotationFormats#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItems</a>

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection">DataOciDataLabelingServiceAnnotationFormatsAnnotationFormatCollection</a>

---


### DataOciDataLabelingServiceAnnotationFormatsFilterList <a name="DataOciDataLabelingServiceAnnotationFormatsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataLabelingServiceAnnotationFormatsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>[]

---


### DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormats } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataLabelingServiceAnnotationFormatsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormats.DataOciDataLabelingServiceAnnotationFormatsFilter">DataOciDataLabelingServiceAnnotationFormatsFilter</a>

---



