# `dataOciLicenseManagerLicenseMetric` Submodule <a name="`dataOciLicenseManagerLicenseMetric` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerLicenseMetric <a name="DataOciLicenseManagerLicenseMetric" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric oci_license_manager_license_metric}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

new dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric(scope: Construct, id: string, config: DataOciLicenseManagerLicenseMetricConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig">DataOciLicenseManagerLicenseMetricConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig">DataOciLicenseManagerLicenseMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree">resetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCompartmentIdInSubtree` <a name="resetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree"></a>

```typescript
public resetIsCompartmentIdInSubtree(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerLicenseMetric to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerLicenseMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerLicenseMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount">licenseRecordExpiringSoonCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount">totalByolInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount">totalLicenseIncludedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount">totalProductLicenseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput">isCompartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `licenseRecordExpiringSoonCount`<sup>Required</sup> <a name="licenseRecordExpiringSoonCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount"></a>

```typescript
public readonly licenseRecordExpiringSoonCount: number;
```

- *Type:* number

---

##### `totalByolInstanceCount`<sup>Required</sup> <a name="totalByolInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount"></a>

```typescript
public readonly totalByolInstanceCount: number;
```

- *Type:* number

---

##### `totalLicenseIncludedInstanceCount`<sup>Required</sup> <a name="totalLicenseIncludedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount"></a>

```typescript
public readonly totalLicenseIncludedInstanceCount: number;
```

- *Type:* number

---

##### `totalProductLicenseCount`<sup>Required</sup> <a name="totalProductLicenseCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount"></a>

```typescript
public readonly totalProductLicenseCount: number;
```

- *Type:* number

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="isCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput"></a>

```typescript
public readonly isCompartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCompartmentIdInSubtree`<sup>Required</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerLicenseMetricConfig <a name="DataOciLicenseManagerLicenseMetricConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.Initializer"></a>

```typescript
import { dataOciLicenseManagerLicenseMetric } from 'rhizo-co-terraform-provider-oci'

const dataOciLicenseManagerLicenseMetricConfig: dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree">isCompartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCompartmentIdInSubtree`<sup>Optional</sup> <a name="isCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree"></a>

```typescript
public readonly isCompartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}.

---



