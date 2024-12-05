# `dataOciVisualBuilderVbInstance` Submodule <a name="`dataOciVisualBuilderVbInstance` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstance <a name="DataOciVisualBuilderVbInstance" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance oci_visual_builder_vb_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance(scope: Construct, id: string, config: DataOciVisualBuilderVbInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig">DataOciVisualBuilderVbInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig">DataOciVisualBuilderVbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVisualBuilderVbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVisualBuilderVbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList">DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList">DataOciVisualBuilderVbInstanceAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList">DataOciVisualBuilderVbInstanceCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList">DataOciVisualBuilderVbInstanceIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsOpenId">idcsOpenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementNatGatewayIp">managementNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementVcnId">managementVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceNatGatewayIp">serviceNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceVcnId">serviceVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceIdInput">vbInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceId">vbInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.alternateCustomEndpoints"></a>

```typescript
public readonly alternateCustomEndpoints: DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList">DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.attachments"></a>

```typescript
public readonly attachments: DataOciVisualBuilderVbInstanceAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList">DataOciVisualBuilderVbInstanceAttachmentsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: DataOciVisualBuilderVbInstanceCustomEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList">DataOciVisualBuilderVbInstanceCustomEndpointList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsInfo"></a>

```typescript
public readonly idcsInfo: DataOciVisualBuilderVbInstanceIdcsInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList">DataOciVisualBuilderVbInstanceIdcsInfoList</a>

---

##### `idcsOpenId`<sup>Required</sup> <a name="idcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.idcsOpenId"></a>

```typescript
public readonly idcsOpenId: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.isVisualBuilderEnabled"></a>

```typescript
public readonly isVisualBuilderEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managementNatGatewayIp`<sup>Required</sup> <a name="managementNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementNatGatewayIp"></a>

```typescript
public readonly managementNatGatewayIp: string;
```

- *Type:* string

---

##### `managementVcnId`<sup>Required</sup> <a name="managementVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.managementVcnId"></a>

```typescript
public readonly managementVcnId: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `serviceNatGatewayIp`<sup>Required</sup> <a name="serviceNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceNatGatewayIp"></a>

```typescript
public readonly serviceNatGatewayIp: string;
```

- *Type:* string

---

##### `serviceVcnId`<sup>Required</sup> <a name="serviceVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.serviceVcnId"></a>

```typescript
public readonly serviceVcnId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `vbInstanceIdInput`<sup>Optional</sup> <a name="vbInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceIdInput"></a>

```typescript
public readonly vbInstanceIdInput: string;
```

- *Type:* string

---

##### `vbInstanceId`<sup>Required</sup> <a name="vbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.vbInstanceId"></a>

```typescript
public readonly vbInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstanceAlternateCustomEndpoints <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstanceAlternateCustomEndpoints: dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints = { ... }
```


### DataOciVisualBuilderVbInstanceAttachments <a name="DataOciVisualBuilderVbInstanceAttachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstanceAttachments: dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments = { ... }
```


### DataOciVisualBuilderVbInstanceConfig <a name="DataOciVisualBuilderVbInstanceConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstanceConfig: dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.vbInstanceId">vbInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#vb_instance_id DataOciVisualBuilderVbInstance#vb_instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vbInstanceId`<sup>Required</sup> <a name="vbInstanceId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceConfig.property.vbInstanceId"></a>

```typescript
public readonly vbInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance#vb_instance_id DataOciVisualBuilderVbInstance#vb_instance_id}.

---

### DataOciVisualBuilderVbInstanceCustomEndpoint <a name="DataOciVisualBuilderVbInstanceCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstanceCustomEndpoint: dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint = { ... }
```


### DataOciVisualBuilderVbInstanceIdcsInfo <a name="DataOciVisualBuilderVbInstanceIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstanceIdcsInfo: dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference <a name="DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints">DataOciVisualBuilderVbInstanceAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstanceAlternateCustomEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAlternateCustomEndpoints">DataOciVisualBuilderVbInstanceAlternateCustomEndpoints</a>

---


### DataOciVisualBuilderVbInstanceAttachmentsList <a name="DataOciVisualBuilderVbInstanceAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstanceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceAttachmentsOutputReference <a name="DataOciVisualBuilderVbInstanceAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments">DataOciVisualBuilderVbInstanceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetInstanceUrl"></a>

```typescript
public readonly targetInstanceUrl: string;
```

- *Type:* string

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetRole"></a>

```typescript
public readonly targetRole: string;
```

- *Type:* string

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.targetServiceType"></a>

```typescript
public readonly targetServiceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstanceAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceAttachments">DataOciVisualBuilderVbInstanceAttachments</a>

---


### DataOciVisualBuilderVbInstanceCustomEndpointList <a name="DataOciVisualBuilderVbInstanceCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstanceCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceCustomEndpointOutputReference <a name="DataOciVisualBuilderVbInstanceCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint">DataOciVisualBuilderVbInstanceCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstanceCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceCustomEndpoint">DataOciVisualBuilderVbInstanceCustomEndpoint</a>

---


### DataOciVisualBuilderVbInstanceIdcsInfoList <a name="DataOciVisualBuilderVbInstanceIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstanceIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstanceIdcsInfoOutputReference <a name="DataOciVisualBuilderVbInstanceIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstance } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo">DataOciVisualBuilderVbInstanceIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```typescript
public readonly idcsAppDisplayName: string;
```

- *Type:* string

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppId"></a>

```typescript
public readonly idcsAppId: string;
```

- *Type:* string

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```typescript
public readonly idcsAppLocationUrl: string;
```

- *Type:* string

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.idcsAppName"></a>

```typescript
public readonly idcsAppName: string;
```

- *Type:* string

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```typescript
public readonly instancePrimaryAudienceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstanceIdcsInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstance.DataOciVisualBuilderVbInstanceIdcsInfo">DataOciVisualBuilderVbInstanceIdcsInfo</a>

---



