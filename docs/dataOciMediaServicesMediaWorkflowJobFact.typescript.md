# `dataOciMediaServicesMediaWorkflowJobFact` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobFact` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobFact <a name="DataOciMediaServicesMediaWorkflowJobFact" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact oci_media_services_media_workflow_job_fact}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact(scope: Construct, id: string, config: DataOciMediaServicesMediaWorkflowJobFactConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig">DataOciMediaServicesMediaWorkflowJobFactConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig">DataOciMediaServicesMediaWorkflowJobFactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFact resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isConstruct"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFact resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobFact to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowJobFact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobFact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.mediaWorkflowJobIdInput">mediaWorkflowJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.mediaWorkflowJobId">mediaWorkflowJobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `detail`<sup>Required</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `mediaWorkflowJobIdInput`<sup>Optional</sup> <a name="mediaWorkflowJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.mediaWorkflowJobIdInput"></a>

```typescript
public readonly mediaWorkflowJobIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `mediaWorkflowJobId`<sup>Required</sup> <a name="mediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.mediaWorkflowJobId"></a>

```typescript
public readonly mediaWorkflowJobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFact.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobFactConfig <a name="DataOciMediaServicesMediaWorkflowJobFactConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFact } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobFactConfig: dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#key DataOciMediaServicesMediaWorkflowJobFact#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.mediaWorkflowJobId">mediaWorkflowJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFact#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#id DataOciMediaServicesMediaWorkflowJobFact#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#key DataOciMediaServicesMediaWorkflowJobFact#key}.

---

##### `mediaWorkflowJobId`<sup>Required</sup> <a name="mediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.mediaWorkflowJobId"></a>

```typescript
public readonly mediaWorkflowJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFact#media_workflow_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFact.DataOciMediaServicesMediaWorkflowJobFactConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_fact#id DataOciMediaServicesMediaWorkflowJobFact#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



