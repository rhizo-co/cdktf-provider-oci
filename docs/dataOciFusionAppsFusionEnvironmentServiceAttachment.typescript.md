# `dataOciFusionAppsFusionEnvironmentServiceAttachment` Submodule <a name="`dataOciFusionAppsFusionEnvironmentServiceAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentServiceAttachment <a name="DataOciFusionAppsFusionEnvironmentServiceAttachment" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment oci_fusion_apps_fusion_environment_service_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

new dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig">DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig">DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentServiceAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isConstruct"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformElement"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformDataSource"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentServiceAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentServiceAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFusionAppsFusionEnvironmentServiceAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentServiceAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.isSkuBased">isSkuBased</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceType">serviceInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceUrl">serviceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentIdInput">fusionEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceAttachmentIdInput">serviceAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isSkuBased`<sup>Required</sup> <a name="isSkuBased" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.isSkuBased"></a>

```typescript
public readonly isSkuBased: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

---

##### `serviceInstanceType`<sup>Required</sup> <a name="serviceInstanceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceInstanceType"></a>

```typescript
public readonly serviceInstanceType: string;
```

- *Type:* string

---

##### `serviceUrl`<sup>Required</sup> <a name="serviceUrl" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceUrl"></a>

```typescript
public readonly serviceUrl: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `fusionEnvironmentIdInput`<sup>Optional</sup> <a name="fusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentIdInput"></a>

```typescript
public readonly fusionEnvironmentIdInput: string;
```

- *Type:* string

---

##### `serviceAttachmentIdInput`<sup>Optional</sup> <a name="serviceAttachmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceAttachmentIdInput"></a>

```typescript
public readonly serviceAttachmentIdInput: string;
```

- *Type:* string

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

---

##### `serviceAttachmentId`<sup>Required</sup> <a name="serviceAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.serviceAttachmentId"></a>

```typescript
public readonly serviceAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig <a name="DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.Initializer"></a>

```typescript
import { dataOciFusionAppsFusionEnvironmentServiceAttachment } from 'rhizo-co-terraform-provider-oci'

const dataOciFusionAppsFusionEnvironmentServiceAttachmentConfig: dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.fusionEnvironmentId">fusionEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceAttachmentId">serviceAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#service_attachment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#service_attachment_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fusionEnvironmentId`<sup>Required</sup> <a name="fusionEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.fusionEnvironmentId"></a>

```typescript
public readonly fusionEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#fusion_environment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#fusion_environment_id}.

---

##### `serviceAttachmentId`<sup>Required</sup> <a name="serviceAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentServiceAttachment.DataOciFusionAppsFusionEnvironmentServiceAttachmentConfig.property.serviceAttachmentId"></a>

```typescript
public readonly serviceAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_service_attachment#service_attachment_id DataOciFusionAppsFusionEnvironmentServiceAttachment#service_attachment_id}.

---



