# `dataOciDataLabelingServiceAnnotationFormat` Submodule <a name="`dataOciDataLabelingServiceAnnotationFormat` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataLabelingServiceAnnotationFormat <a name="DataOciDataLabelingServiceAnnotationFormat" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format oci_data_labeling_service_annotation_format}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat(scope: Construct, id: string, config: DataOciDataLabelingServiceAnnotationFormatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig">DataOciDataLabelingServiceAnnotationFormatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig">DataOciDataLabelingServiceAnnotationFormatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isConstruct"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformElement"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformDataSource"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataLabelingServiceAnnotationFormat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataLabelingServiceAnnotationFormat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataLabelingServiceAnnotationFormat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataLabelingServiceAnnotationFormat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList">DataOciDataLabelingServiceAnnotationFormatItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.items"></a>

```typescript
public readonly items: DataOciDataLabelingServiceAnnotationFormatItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList">DataOciDataLabelingServiceAnnotationFormatItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataLabelingServiceAnnotationFormatConfig <a name="DataOciDataLabelingServiceAnnotationFormatConfig" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatConfig: dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format#compartment_id DataOciDataLabelingServiceAnnotationFormat#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format#id DataOciDataLabelingServiceAnnotationFormat#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format#compartment_id DataOciDataLabelingServiceAnnotationFormat#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_labeling_service_annotation_format#id DataOciDataLabelingServiceAnnotationFormat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDataLabelingServiceAnnotationFormatItems <a name="DataOciDataLabelingServiceAnnotationFormatItems" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItems.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

const dataOciDataLabelingServiceAnnotationFormatItems: dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataLabelingServiceAnnotationFormatItemsList <a name="DataOciDataLabelingServiceAnnotationFormatItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.get"></a>

```typescript
public get(index: number): DataOciDataLabelingServiceAnnotationFormatItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataLabelingServiceAnnotationFormatItemsOutputReference <a name="DataOciDataLabelingServiceAnnotationFormatItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataLabelingServiceAnnotationFormat } from 'rhizo-co-terraform-provider-oci'

new dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItems">DataOciDataLabelingServiceAnnotationFormatItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataLabelingServiceAnnotationFormatItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataLabelingServiceAnnotationFormat.DataOciDataLabelingServiceAnnotationFormatItems">DataOciDataLabelingServiceAnnotationFormatItems</a>

---



