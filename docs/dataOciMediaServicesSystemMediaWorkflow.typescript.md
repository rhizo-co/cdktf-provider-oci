# `dataOciMediaServicesSystemMediaWorkflow` Submodule <a name="`dataOciMediaServicesSystemMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesSystemMediaWorkflow <a name="DataOciMediaServicesSystemMediaWorkflow" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow oci_media_services_system_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow(scope: Construct, id: string, config?: DataOciMediaServicesSystemMediaWorkflowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig">DataOciMediaServicesSystemMediaWorkflowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig">DataOciMediaServicesSystemMediaWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesSystemMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesSystemMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesSystemMediaWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesSystemMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesSystemMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList">DataOciMediaServicesSystemMediaWorkflowItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesSystemMediaWorkflowItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList">DataOciMediaServicesSystemMediaWorkflowItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesSystemMediaWorkflowConfig <a name="DataOciMediaServicesSystemMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesSystemMediaWorkflowConfig: dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#compartment_id DataOciMediaServicesSystemMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#id DataOciMediaServicesSystemMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#name DataOciMediaServicesSystemMediaWorkflow#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#compartment_id DataOciMediaServicesSystemMediaWorkflow#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#id DataOciMediaServicesSystemMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_system_media_workflow#name DataOciMediaServicesSystemMediaWorkflow#name}.

---

### DataOciMediaServicesSystemMediaWorkflowItems <a name="DataOciMediaServicesSystemMediaWorkflowItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesSystemMediaWorkflowItems: dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems = { ... }
```


### DataOciMediaServicesSystemMediaWorkflowItemsTasks <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesSystemMediaWorkflowItemsTasks: dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesSystemMediaWorkflowItemsList <a name="DataOciMediaServicesSystemMediaWorkflowItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesSystemMediaWorkflowItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesSystemMediaWorkflowItemsOutputReference <a name="DataOciMediaServicesSystemMediaWorkflowItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList">DataOciMediaServicesSystemMediaWorkflowItemsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems">DataOciMediaServicesSystemMediaWorkflowItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.tasks"></a>

```typescript
public readonly tasks: DataOciMediaServicesSystemMediaWorkflowItemsTasksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList">DataOciMediaServicesSystemMediaWorkflowItemsTasksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesSystemMediaWorkflowItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItems">DataOciMediaServicesSystemMediaWorkflowItems</a>

---


### DataOciMediaServicesSystemMediaWorkflowItemsTasksList <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference <a name="DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesSystemMediaWorkflow } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableParameterReference">enableParameterReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableWhenReferencedParameterEquals">enableWhenReferencedParameterEquals</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.prerequisites">prerequisites</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks">DataOciMediaServicesSystemMediaWorkflowItemsTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableParameterReference`<sup>Required</sup> <a name="enableParameterReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableParameterReference"></a>

```typescript
public readonly enableParameterReference: string;
```

- *Type:* string

---

##### `enableWhenReferencedParameterEquals`<sup>Required</sup> <a name="enableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```typescript
public readonly enableWhenReferencedParameterEquals: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.prerequisites"></a>

```typescript
public readonly prerequisites: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesSystemMediaWorkflowItemsTasks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesSystemMediaWorkflow.DataOciMediaServicesSystemMediaWorkflowItemsTasks">DataOciMediaServicesSystemMediaWorkflowItemsTasks</a>

---



