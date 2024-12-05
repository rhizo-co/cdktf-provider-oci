# `dataOciVisualBuilderVbInstances` Submodule <a name="`dataOciVisualBuilderVbInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstances <a name="DataOciVisualBuilderVbInstances" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances oci_visual_builder_vb_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances(scope: Construct, id: string, config: DataOciVisualBuilderVbInstancesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig">DataOciVisualBuilderVbInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciVisualBuilderVbInstancesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciVisualBuilderVbInstances to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciVisualBuilderVbInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection">vbInstanceSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filter"></a>

```typescript
public readonly filter: DataOciVisualBuilderVbInstancesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList">DataOciVisualBuilderVbInstancesFilterList</a>

---

##### `vbInstanceSummaryCollection`<sup>Required</sup> <a name="vbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.vbInstanceSummaryCollection"></a>

```typescript
public readonly vbInstanceSummaryCollection: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciVisualBuilderVbInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstances.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstancesConfig <a name="DataOciVisualBuilderVbInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesConfig: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciVisualBuilderVbInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#filter DataOciVisualBuilderVbInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}.

---

### DataOciVisualBuilderVbInstancesFilter <a name="DataOciVisualBuilderVbInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesFilter: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}.

---

### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollection: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection = { ... }
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems = { ... }
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints = { ... }
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments = { ... }
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint = { ... }
```


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

const dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo: dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstancesFilterList <a name="DataOciVisualBuilderVbInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciVisualBuilderVbInstancesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>[]

---


### DataOciVisualBuilderVbInstancesFilterOutputReference <a name="DataOciVisualBuilderVbInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciVisualBuilderVbInstancesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesFilter">DataOciVisualBuilderVbInstancesFilter</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit">isImplicit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl">targetInstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole">targetRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType">targetServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isImplicit`<sup>Required</sup> <a name="isImplicit" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.isImplicit"></a>

```typescript
public readonly isImplicit: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetInstanceUrl`<sup>Required</sup> <a name="targetInstanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetInstanceUrl"></a>

```typescript
public readonly targetInstanceUrl: string;
```

- *Type:* string

---

##### `targetRole`<sup>Required</sup> <a name="targetRole" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetRole"></a>

```typescript
public readonly targetRole: string;
```

- *Type:* string

---

##### `targetServiceType`<sup>Required</sup> <a name="targetServiceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.targetServiceType"></a>

```typescript
public readonly targetServiceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachments</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId">certificateSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion">certificateSecretVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateSecretId`<sup>Required</sup> <a name="certificateSecretId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretId"></a>

```typescript
public readonly certificateSecretId: string;
```

- *Type:* string

---

##### `certificateSecretVersion`<sup>Required</sup> <a name="certificateSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.certificateSecretVersion"></a>

```typescript
public readonly certificateSecretVersion: number;
```

- *Type:* number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName">idcsAppDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId">idcsAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl">idcsAppLocationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName">idcsAppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl">instancePrimaryAudienceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idcsAppDisplayName`<sup>Required</sup> <a name="idcsAppDisplayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppDisplayName"></a>

```typescript
public readonly idcsAppDisplayName: string;
```

- *Type:* string

---

##### `idcsAppId`<sup>Required</sup> <a name="idcsAppId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppId"></a>

```typescript
public readonly idcsAppId: string;
```

- *Type:* string

---

##### `idcsAppLocationUrl`<sup>Required</sup> <a name="idcsAppLocationUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppLocationUrl"></a>

```typescript
public readonly idcsAppLocationUrl: string;
```

- *Type:* string

---

##### `idcsAppName`<sup>Required</sup> <a name="idcsAppName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.idcsAppName"></a>

```typescript
public readonly idcsAppName: string;
```

- *Type:* string

---

##### `instancePrimaryAudienceUrl`<sup>Required</sup> <a name="instancePrimaryAudienceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.instancePrimaryAudienceUrl"></a>

```typescript
public readonly instancePrimaryAudienceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfo</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints">alternateCustomEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments">attachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel">consumptionModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint">customEndpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo">idcsInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId">idcsOpenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl">instanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled">isVisualBuilderEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp">managementNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId">managementVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp">serviceNatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId">serviceVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alternateCustomEndpoints`<sup>Required</sup> <a name="alternateCustomEndpoints" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.alternateCustomEndpoints"></a>

```typescript
public readonly alternateCustomEndpoints: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList</a>

---

##### `attachments`<sup>Required</sup> <a name="attachments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.attachments"></a>

```typescript
public readonly attachments: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAttachmentsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `consumptionModel`<sup>Required</sup> <a name="consumptionModel" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.consumptionModel"></a>

```typescript
public readonly consumptionModel: string;
```

- *Type:* string

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idcsInfo`<sup>Required</sup> <a name="idcsInfo" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsInfo"></a>

```typescript
public readonly idcsInfo: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsIdcsInfoList</a>

---

##### `idcsOpenId`<sup>Required</sup> <a name="idcsOpenId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.idcsOpenId"></a>

```typescript
public readonly idcsOpenId: string;
```

- *Type:* string

---

##### `instanceUrl`<sup>Required</sup> <a name="instanceUrl" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.instanceUrl"></a>

```typescript
public readonly instanceUrl: string;
```

- *Type:* string

---

##### `isVisualBuilderEnabled`<sup>Required</sup> <a name="isVisualBuilderEnabled" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.isVisualBuilderEnabled"></a>

```typescript
public readonly isVisualBuilderEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managementNatGatewayIp`<sup>Required</sup> <a name="managementNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementNatGatewayIp"></a>

```typescript
public readonly managementNatGatewayIp: string;
```

- *Type:* string

---

##### `managementVcnId`<sup>Required</sup> <a name="managementVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.managementVcnId"></a>

```typescript
public readonly managementVcnId: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `serviceNatGatewayIp`<sup>Required</sup> <a name="serviceNatGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceNatGatewayIp"></a>

```typescript
public readonly serviceNatGatewayIp: string;
```

- *Type:* string

---

##### `serviceVcnId`<sup>Required</sup> <a name="serviceVcnId" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.serviceVcnId"></a>

```typescript
public readonly serviceVcnId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciVisualBuilderVbInstances } from 'rhizo-co-terraform-provider-oci'

new dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstances.DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection">DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection</a>

---



