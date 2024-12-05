# `dataOciDatabaseMigrationJobAdvisorReport` Submodule <a name="`dataOciDatabaseMigrationJobAdvisorReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMigrationJobAdvisorReport <a name="DataOciDatabaseMigrationJobAdvisorReport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report oci_database_migration_job_advisor_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport(scope: Construct, id: string, config: DataOciDatabaseMigrationJobAdvisorReportConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig">DataOciDatabaseMigrationJobAdvisorReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseMigrationJobAdvisorReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseMigrationJobAdvisorReport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseMigrationJobAdvisorReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMigrationJobAdvisorReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal">numberOfFatal</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers">numberOfFatalBlockers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults">numberOfInformationalResults</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings">numberOfWarnings</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails">reportLocationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result">result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `numberOfFatal`<sup>Required</sup> <a name="numberOfFatal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatal"></a>

```typescript
public readonly numberOfFatal: number;
```

- *Type:* number

---

##### `numberOfFatalBlockers`<sup>Required</sup> <a name="numberOfFatalBlockers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfFatalBlockers"></a>

```typescript
public readonly numberOfFatalBlockers: number;
```

- *Type:* number

---

##### `numberOfInformationalResults`<sup>Required</sup> <a name="numberOfInformationalResults" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfInformationalResults"></a>

```typescript
public readonly numberOfInformationalResults: number;
```

- *Type:* number

---

##### `numberOfWarnings`<sup>Required</sup> <a name="numberOfWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.numberOfWarnings"></a>

```typescript
public readonly numberOfWarnings: number;
```

- *Type:* number

---

##### `reportLocationDetails`<sup>Required</sup> <a name="reportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.reportLocationDetails"></a>

```typescript
public readonly reportLocationDetails: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList</a>

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.result"></a>

```typescript
public readonly result: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReport.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMigrationJobAdvisorReportConfig <a name="DataOciDatabaseMigrationJobAdvisorReportConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationJobAdvisorReportConfig: dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#job_id DataOciDatabaseMigrationJobAdvisorReport#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_migration_job_advisor_report#id DataOciDatabaseMigrationJobAdvisorReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationJobAdvisorReportReportLocationDetails: dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails = { ... }
```


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails: dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object">object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.object"></a>

```typescript
public readonly object: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetails</a>

---


### DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference <a name="DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseMigrationJobAdvisorReport } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource">locationInSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails">objectStorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInSource`<sup>Required</sup> <a name="locationInSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.locationInSource"></a>

```typescript
public readonly locationInSource: string;
```

- *Type:* string

---

##### `objectStorageDetails`<sup>Required</sup> <a name="objectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.objectStorageDetails"></a>

```typescript
public readonly objectStorageDetails: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsObjectStorageDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMigrationJobAdvisorReport.DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails">DataOciDatabaseMigrationJobAdvisorReportReportLocationDetails</a>

---



