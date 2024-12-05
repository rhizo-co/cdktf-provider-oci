# `dataOciDataSafeDiscoveryJobsResults` Submodule <a name="`dataOciDataSafeDiscoveryJobsResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDiscoveryJobsResults <a name="DataOciDataSafeDiscoveryJobsResults" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results oci_data_safe_discovery_jobs_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults(scope: Construct, id: string, config: DataOciDataSafeDiscoveryJobsResultsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig">DataOciDataSafeDiscoveryJobsResultsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig">DataOciDataSafeDiscoveryJobsResultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName">resetColumnName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType">resetDiscoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied">resetIsResultApplied</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction">resetPlannedAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeDiscoveryJobsResultsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]

---

##### `resetColumnName` <a name="resetColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetColumnName"></a>

```typescript
public resetColumnName(): void
```

##### `resetDiscoveryType` <a name="resetDiscoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetDiscoveryType"></a>

```typescript
public resetDiscoveryType(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsResultApplied` <a name="resetIsResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetIsResultApplied"></a>

```typescript
public resetIsResultApplied(): void
```

##### `resetObject` <a name="resetObject" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetPlannedAction` <a name="resetPlannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetPlannedAction"></a>

```typescript
public resetPlannedAction(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeDiscoveryJobsResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeDiscoveryJobsResults to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeDiscoveryJobsResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDiscoveryJobsResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection">discoveryJobResultCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput">columnNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput">discoveryJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput">discoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput">isResultAppliedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput">objectInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput">plannedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput">schemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName">columnName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied">isResultApplied</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object">object</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName">schemaName</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `discoveryJobResultCollection`<sup>Required</sup> <a name="discoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobResultCollection"></a>

```typescript
public readonly discoveryJobResultCollection: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeDiscoveryJobsResultsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList">DataOciDataSafeDiscoveryJobsResultsFilterList</a>

---

##### `columnNameInput`<sup>Optional</sup> <a name="columnNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnNameInput"></a>

```typescript
public readonly columnNameInput: string[];
```

- *Type:* string[]

---

##### `discoveryJobIdInput`<sup>Optional</sup> <a name="discoveryJobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobIdInput"></a>

```typescript
public readonly discoveryJobIdInput: string;
```

- *Type:* string

---

##### `discoveryTypeInput`<sup>Optional</sup> <a name="discoveryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryTypeInput"></a>

```typescript
public readonly discoveryTypeInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeDiscoveryJobsResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isResultAppliedInput`<sup>Optional</sup> <a name="isResultAppliedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultAppliedInput"></a>

```typescript
public readonly isResultAppliedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.objectInput"></a>

```typescript
public readonly objectInput: string[];
```

- *Type:* string[]

---

##### `plannedActionInput`<sup>Optional</sup> <a name="plannedActionInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedActionInput"></a>

```typescript
public readonly plannedActionInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string[];
```

- *Type:* string[]

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isResultApplied`<sup>Required</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.isResultApplied"></a>

```typescript
public readonly isResultApplied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResults.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDiscoveryJobsResultsConfig <a name="DataOciDataSafeDiscoveryJobsResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobsResultsConfig: dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName">columnName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType">discoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied">isResultApplied</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object">object</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction">plannedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName">schemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_job_id DataOciDataSafeDiscoveryJobsResults#discovery_job_id}.

---

##### `columnName`<sup>Optional</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.columnName"></a>

```typescript
public readonly columnName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#column_name DataOciDataSafeDiscoveryJobsResults#column_name}.

---

##### `discoveryType`<sup>Optional</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#discovery_type DataOciDataSafeDiscoveryJobsResults#discovery_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeDiscoveryJobsResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#filter DataOciDataSafeDiscoveryJobsResults#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#id DataOciDataSafeDiscoveryJobsResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isResultApplied`<sup>Optional</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.isResultApplied"></a>

```typescript
public readonly isResultApplied: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#is_result_applied DataOciDataSafeDiscoveryJobsResults#is_result_applied}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.object"></a>

```typescript
public readonly object: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#object DataOciDataSafeDiscoveryJobsResults#object}.

---

##### `plannedAction`<sup>Optional</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#planned_action DataOciDataSafeDiscoveryJobsResults#planned_action}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#schema_name DataOciDataSafeDiscoveryJobsResults#schema_name}.

---

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection: dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection = { ... }
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems: dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems = { ... }
```


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes: dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes = { ... }
```


### DataOciDataSafeDiscoveryJobsResultsFilter <a name="DataOciDataSafeDiscoveryJobsResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeDiscoveryJobsResultsFilter: dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#name DataOciDataSafeDiscoveryJobsResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#values DataOciDataSafeDiscoveryJobsResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_discovery_jobs_results#regex DataOciDataSafeDiscoveryJobsResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributes</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys">appDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName">appName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName">columnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys">dbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId">discoveryJobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType">discoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount">estimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied">isResultApplied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes">modifiedAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys">parentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction">plannedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType">relationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues">sampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey">sensitiveColumnkey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId">sensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appDefinedChildColumnKeys`<sup>Required</sup> <a name="appDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appDefinedChildColumnKeys"></a>

```typescript
public readonly appDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `appName`<sup>Required</sup> <a name="appName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.appName"></a>

```typescript
public readonly appName: string;
```

- *Type:* string

---

##### `columnName`<sup>Required</sup> <a name="columnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.columnName"></a>

```typescript
public readonly columnName: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `dbDefinedChildColumnKeys`<sup>Required</sup> <a name="dbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.dbDefinedChildColumnKeys"></a>

```typescript
public readonly dbDefinedChildColumnKeys: string[];
```

- *Type:* string[]

---

##### `discoveryJobId`<sup>Required</sup> <a name="discoveryJobId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryJobId"></a>

```typescript
public readonly discoveryJobId: string;
```

- *Type:* string

---

##### `discoveryType`<sup>Required</sup> <a name="discoveryType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.discoveryType"></a>

```typescript
public readonly discoveryType: string;
```

- *Type:* string

---

##### `estimatedDataValueCount`<sup>Required</sup> <a name="estimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.estimatedDataValueCount"></a>

```typescript
public readonly estimatedDataValueCount: string;
```

- *Type:* string

---

##### `isResultApplied`<sup>Required</sup> <a name="isResultApplied" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.isResultApplied"></a>

```typescript
public readonly isResultApplied: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `modifiedAttributes`<sup>Required</sup> <a name="modifiedAttributes" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.modifiedAttributes"></a>

```typescript
public readonly modifiedAttributes: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsModifiedAttributesList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `parentColumnKeys`<sup>Required</sup> <a name="parentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.parentColumnKeys"></a>

```typescript
public readonly parentColumnKeys: string[];
```

- *Type:* string[]

---

##### `plannedAction`<sup>Required</sup> <a name="plannedAction" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.plannedAction"></a>

```typescript
public readonly plannedAction: string;
```

- *Type:* string

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

---

##### `sampleDataValues`<sup>Required</sup> <a name="sampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sampleDataValues"></a>

```typescript
public readonly sampleDataValues: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sensitiveColumnkey`<sup>Required</sup> <a name="sensitiveColumnkey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveColumnkey"></a>

```typescript
public readonly sensitiveColumnkey: string;
```

- *Type:* string

---

##### `sensitiveTypeId`<sup>Required</sup> <a name="sensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.sensitiveTypeId"></a>

```typescript
public readonly sensitiveTypeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItems</a>

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection">DataOciDataSafeDiscoveryJobsResultsDiscoveryJobResultCollection</a>

---


### DataOciDataSafeDiscoveryJobsResultsFilterList <a name="DataOciDataSafeDiscoveryJobsResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeDiscoveryJobsResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeDiscoveryJobsResultsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>[]

---


### DataOciDataSafeDiscoveryJobsResultsFilterOutputReference <a name="DataOciDataSafeDiscoveryJobsResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeDiscoveryJobsResults } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeDiscoveryJobsResultsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDiscoveryJobsResults.DataOciDataSafeDiscoveryJobsResultsFilter">DataOciDataSafeDiscoveryJobsResultsFilter</a>

---



