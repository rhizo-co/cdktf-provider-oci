# `dataOciMediaServicesMediaWorkflowJobs` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobs <a name="DataOciMediaServicesMediaWorkflowJobs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs oci_media_services_media_workflow_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs(scope: Construct, id: string, config?: DataOciMediaServicesMediaWorkflowJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig">DataOciMediaServicesMediaWorkflowJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig">DataOciMediaServicesMediaWorkflowJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetMediaWorkflowId">resetMediaWorkflowId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMediaServicesMediaWorkflowJobsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMediaWorkflowId` <a name="resetMediaWorkflowId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetMediaWorkflowId"></a>

```typescript
public resetMediaWorkflowId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList">DataOciMediaServicesMediaWorkflowJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowJobCollection">mediaWorkflowJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowIdInput">mediaWorkflowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowId">mediaWorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filter"></a>

```typescript
public readonly filter: DataOciMediaServicesMediaWorkflowJobsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList">DataOciMediaServicesMediaWorkflowJobsFilterList</a>

---

##### `mediaWorkflowJobCollection`<sup>Required</sup> <a name="mediaWorkflowJobCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowJobCollection"></a>

```typescript
public readonly mediaWorkflowJobCollection: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMediaServicesMediaWorkflowJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mediaWorkflowIdInput`<sup>Optional</sup> <a name="mediaWorkflowIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowIdInput"></a>

```typescript
public readonly mediaWorkflowIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mediaWorkflowId`<sup>Required</sup> <a name="mediaWorkflowId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowId"></a>

```typescript
public readonly mediaWorkflowId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobsConfig <a name="DataOciMediaServicesMediaWorkflowJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsConfig: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.mediaWorkflowId">mediaWorkflowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMediaServicesMediaWorkflowJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#filter DataOciMediaServicesMediaWorkflowJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mediaWorkflowId`<sup>Optional</sup> <a name="mediaWorkflowId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.mediaWorkflowId"></a>

```typescript
public readonly mediaWorkflowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}.

---

### DataOciMediaServicesMediaWorkflowJobsFilter <a name="DataOciMediaServicesMediaWorkflowJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsFilter: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#name DataOciMediaServicesMediaWorkflowJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#values DataOciMediaServicesMediaWorkflowJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#regex DataOciMediaServicesMediaWorkflowJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#name DataOciMediaServicesMediaWorkflowJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#values DataOciMediaServicesMediaWorkflowJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#regex DataOciMediaServicesMediaWorkflowJobs#regex}.

---

### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection = { ... }
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems = { ... }
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks = { ... }
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs = { ... }
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState: dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowJobsFilterList <a name="DataOciMediaServicesMediaWorkflowJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>[]

---


### DataOciMediaServicesMediaWorkflowJobsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowJobsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowId">mediaWorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowName">mediaWorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.outputs">outputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.runnable">runnable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.taskLifecycleState">taskLifecycleState</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeEnded">timeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeStarted">timeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.workflowIdentifierType">workflowIdentifierType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.locks"></a>

```typescript
public readonly locks: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList</a>

---

##### `mediaWorkflowConfigurationIds`<sup>Required</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowConfigurationIds"></a>

```typescript
public readonly mediaWorkflowConfigurationIds: string[];
```

- *Type:* string[]

---

##### `mediaWorkflowId`<sup>Required</sup> <a name="mediaWorkflowId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowId"></a>

```typescript
public readonly mediaWorkflowId: string;
```

- *Type:* string

---

##### `mediaWorkflowName`<sup>Required</sup> <a name="mediaWorkflowName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowName"></a>

```typescript
public readonly mediaWorkflowName: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.outputs"></a>

```typescript
public readonly outputs: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `runnable`<sup>Required</sup> <a name="runnable" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.runnable"></a>

```typescript
public readonly runnable: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `taskLifecycleState`<sup>Required</sup> <a name="taskLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.taskLifecycleState"></a>

```typescript
public readonly taskLifecycleState: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeEnded"></a>

```typescript
public readonly timeEnded: string;
```

- *Type:* string

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeStarted"></a>

```typescript
public readonly timeStarted: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `workflowIdentifierType`<sup>Required</sup> <a name="workflowIdentifierType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.workflowIdentifierType"></a>

```typescript
public readonly workflowIdentifierType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.assetType">assetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.assetType"></a>

```typescript
public readonly assetType: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection</a>

---



