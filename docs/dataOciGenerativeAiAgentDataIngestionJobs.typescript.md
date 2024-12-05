# `dataOciGenerativeAiAgentDataIngestionJobs` Submodule <a name="`dataOciGenerativeAiAgentDataIngestionJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataIngestionJobs <a name="DataOciGenerativeAiAgentDataIngestionJobs" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs oci_generative_ai_agent_data_ingestion_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs(scope: Construct, id: string, config?: DataOciGenerativeAiAgentDataIngestionJobsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig">DataOciGenerativeAiAgentDataIngestionJobsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig">DataOciGenerativeAiAgentDataIngestionJobsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciGenerativeAiAgentDataIngestionJobsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDataSourceId"></a>

```typescript
public resetDataSourceId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciGenerativeAiAgentDataIngestionJobs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciGenerativeAiAgentDataIngestionJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataIngestionJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataIngestionJobCollection">dataIngestionJobCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList">DataOciGenerativeAiAgentDataIngestionJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataIngestionJobCollection`<sup>Required</sup> <a name="dataIngestionJobCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataIngestionJobCollection"></a>

```typescript
public readonly dataIngestionJobCollection: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filter"></a>

```typescript
public readonly filter: DataOciGenerativeAiAgentDataIngestionJobsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList">DataOciGenerativeAiAgentDataIngestionJobsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciGenerativeAiAgentDataIngestionJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataIngestionJobsConfig <a name="DataOciGenerativeAiAgentDataIngestionJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentDataIngestionJobsConfig: dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#compartment_id DataOciGenerativeAiAgentDataIngestionJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#data_source_id DataOciGenerativeAiAgentDataIngestionJobs#data_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#display_name DataOciGenerativeAiAgentDataIngestionJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#id DataOciGenerativeAiAgentDataIngestionJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#state DataOciGenerativeAiAgentDataIngestionJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#compartment_id DataOciGenerativeAiAgentDataIngestionJobs#compartment_id}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#data_source_id DataOciGenerativeAiAgentDataIngestionJobs#data_source_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#display_name DataOciGenerativeAiAgentDataIngestionJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciGenerativeAiAgentDataIngestionJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#filter DataOciGenerativeAiAgentDataIngestionJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#id DataOciGenerativeAiAgentDataIngestionJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#state DataOciGenerativeAiAgentDataIngestionJobs#state}.

---

### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection: dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection = { ... }
```


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems: dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems = { ... }
```


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics: dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics = { ... }
```


### DataOciGenerativeAiAgentDataIngestionJobsFilter <a name="DataOciGenerativeAiAgentDataIngestionJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

const dataOciGenerativeAiAgentDataIngestionJobsFilter: dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#name DataOciGenerativeAiAgentDataIngestionJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#values DataOciGenerativeAiAgentDataIngestionJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#regex DataOciGenerativeAiAgentDataIngestionJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#name DataOciGenerativeAiAgentDataIngestionJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#values DataOciGenerativeAiAgentDataIngestionJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_jobs#regex DataOciGenerativeAiAgentDataIngestionJobs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles">numberOfFailedFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles">numberOfIngestedFiles</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

---

##### `numberOfFailedFiles`<sup>Required</sup> <a name="numberOfFailedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfFailedFiles"></a>

```typescript
public readonly numberOfFailedFiles: number;
```

- *Type:* number

---

##### `numberOfIngestedFiles`<sup>Required</sup> <a name="numberOfIngestedFiles" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.numberOfIngestedFiles"></a>

```typescript
public readonly numberOfIngestedFiles: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatistics</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataIngestionJobStatistics">dataIngestionJobStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataIngestionJobStatistics`<sup>Required</sup> <a name="dataIngestionJobStatistics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataIngestionJobStatistics"></a>

```typescript
public readonly dataIngestionJobStatistics: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsDataIngestionJobStatisticsList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItems</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection">DataOciGenerativeAiAgentDataIngestionJobsDataIngestionJobCollection</a>

---


### DataOciGenerativeAiAgentDataIngestionJobsFilterList <a name="DataOciGenerativeAiAgentDataIngestionJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get"></a>

```typescript
public get(index: number): DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiAgentDataIngestionJobsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>[]

---


### DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference <a name="DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciGenerativeAiAgentDataIngestionJobs } from 'rhizo-co-terraform-provider-oci'

new dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciGenerativeAiAgentDataIngestionJobsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobs.DataOciGenerativeAiAgentDataIngestionJobsFilter">DataOciGenerativeAiAgentDataIngestionJobsFilter</a>

---



