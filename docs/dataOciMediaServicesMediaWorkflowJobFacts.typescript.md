# `dataOciMediaServicesMediaWorkflowJobFacts` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobFacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobFacts <a name="DataOciMediaServicesMediaWorkflowJobFacts" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts oci_media_services_media_workflow_job_facts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts(scope: Construct, id: string, config: DataOciMediaServicesMediaWorkflowJobFactsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig">DataOciMediaServicesMediaWorkflowJobFactsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig">DataOciMediaServicesMediaWorkflowJobFactsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMediaServicesMediaWorkflowJobFactsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKey` <a name="resetKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobFacts to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowJobFacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobFacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection">mediaWorkflowJobFactCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput">mediaWorkflowJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId">mediaWorkflowJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter"></a>

```typescript
public readonly filter: DataOciMediaServicesMediaWorkflowJobFactsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a>

---

##### `mediaWorkflowJobFactCollection`<sup>Required</sup> <a name="mediaWorkflowJobFactCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection"></a>

```typescript
public readonly mediaWorkflowJobFactCollection: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMediaServicesMediaWorkflowJobFactsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `mediaWorkflowJobIdInput`<sup>Optional</sup> <a name="mediaWorkflowJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput"></a>

```typescript
public readonly mediaWorkflowJobIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `mediaWorkflowJobId`<sup>Required</sup> <a name="mediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId"></a>

```typescript
public readonly mediaWorkflowJobId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobFactsConfig <a name="DataOciMediaServicesMediaWorkflowJobFactsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobFactsConfig: dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId">mediaWorkflowJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mediaWorkflowJobId`<sup>Required</sup> <a name="mediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId"></a>

```typescript
public readonly mediaWorkflowJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMediaServicesMediaWorkflowJobFactsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#filter DataOciMediaServicesMediaWorkflowJobFacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}.

---

### DataOciMediaServicesMediaWorkflowJobFactsFilter <a name="DataOciMediaServicesMediaWorkflowJobFactsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobFactsFilter: dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}.

---

### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection: dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection = { ... }
```


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems: dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowJobFactsFilterList <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowJobFactsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>[]

---


### DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMediaServicesMediaWorkflowJobFactsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail">detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId">mediaWorkflowJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail"></a>

```typescript
public readonly detail: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `mediaWorkflowJobId`<sup>Required</sup> <a name="mediaWorkflowJobId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId"></a>

```typescript
public readonly mediaWorkflowJobId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowJobFacts } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a>

---



