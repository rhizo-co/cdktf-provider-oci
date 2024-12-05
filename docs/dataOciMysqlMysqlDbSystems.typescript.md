# `dataOciMysqlMysqlDbSystems` Submodule <a name="`dataOciMysqlMysqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlDbSystems <a name="DataOciMysqlMysqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems oci_mysql_mysql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems(scope: Construct, id: string, config: DataOciMysqlMysqlDbSystemsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId">resetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement">resetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached">resetIsHeatWaveClusterAttached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate">resetIsUpToDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciMysqlMysqlDbSystemsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]

---

##### `resetConfigurationId` <a name="resetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId"></a>

```typescript
public resetConfigurationId(): void
```

##### `resetDatabaseManagement` <a name="resetDatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement"></a>

```typescript
public resetDatabaseManagement(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsHeatWaveClusterAttached` <a name="resetIsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached"></a>

```typescript
public resetIsHeatWaveClusterAttached(): void
```

##### `resetIsUpToDate` <a name="resetIsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate"></a>

```typescript
public resetIsUpToDate(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMysqlMysqlDbSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMysqlMysqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems">dbSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput">configurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput">databaseManagementInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput">isHeatWaveClusterAttachedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput">isUpToDateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement">databaseManagement</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate">isUpToDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbSystems`<sup>Required</sup> <a name="dbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems"></a>

```typescript
public readonly dbSystems: DataOciMysqlMysqlDbSystemsDbSystemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter"></a>

```typescript
public readonly filter: DataOciMysqlMysqlDbSystemsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `configurationIdInput`<sup>Optional</sup> <a name="configurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput"></a>

```typescript
public readonly configurationIdInput: string;
```

- *Type:* string

---

##### `databaseManagementInput`<sup>Optional</sup> <a name="databaseManagementInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput"></a>

```typescript
public readonly databaseManagementInput: string[];
```

- *Type:* string[]

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciMysqlMysqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isHeatWaveClusterAttachedInput`<sup>Optional</sup> <a name="isHeatWaveClusterAttachedInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput"></a>

```typescript
public readonly isHeatWaveClusterAttachedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpToDateInput`<sup>Optional</sup> <a name="isUpToDateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput"></a>

```typescript
public readonly isUpToDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string[];
```

- *Type:* string[]

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpToDate`<sup>Required</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate"></a>

```typescript
public readonly isUpToDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlDbSystemsConfig <a name="DataOciMysqlMysqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsConfig: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId">configurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement">databaseManagement</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate">isUpToDate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}.

---

##### `configurationId`<sup>Optional</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}.

---

##### `databaseManagement`<sup>Optional</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciMysqlMysqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#filter DataOciMysqlMysqlDbSystems#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isHeatWaveClusterAttached`<sup>Optional</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}.

---

##### `isUpToDate`<sup>Optional</sup> <a name="isUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate"></a>

```typescript
public readonly isUpToDate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}.

---

### DataOciMysqlMysqlDbSystemsDbSystems <a name="DataOciMysqlMysqlDbSystemsDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystems: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannels <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannels: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannelsSource: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorage <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsDataStorage: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsEndpoints <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsEndpoints: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenance <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsMaintenance: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsSecureConnections: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections = { ... }
```


### DataOciMysqlMysqlDbSystemsDbSystemsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsDbSystemsSource: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource = { ... }
```


### DataOciMysqlMysqlDbSystemsFilter <a name="DataOciMysqlMysqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

const dataOciMysqlMysqlDbSystemsFilter: dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy">pitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pitrPolicy`<sup>Required</sup> <a name="pitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy"></a>

```typescript
public readonly pitrPolicy: DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a>

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target">target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source"></a>

```typescript
public readonly source: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target"></a>

```typescript
public readonly target: DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannels;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">lastConfiguredLogFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">lastConfiguredLogOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastConfiguredLogFilename`<sup>Required</sup> <a name="lastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```typescript
public readonly lastConfiguredLogFilename: string;
```

- *Type:* string

---

##### `lastConfiguredLogOffset`<sup>Required</sup> <a name="lastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```typescript
public readonly lastConfiguredLogOffset: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling">anonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate">sslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anonymousTransactionsHandling`<sup>Required</sup> <a name="anonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```typescript
public readonly anonymousTransactionsHandling: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sslCaCertificate`<sup>Required</sup> <a name="sslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate"></a>

```typescript
public readonly sslCaCertificate: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a>

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType">certificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents">contents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateType`<sup>Required</sup> <a name="certificateType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```typescript
public readonly certificateType: string;
```

- *Type:* string

---

##### `contents`<sup>Required</sup> <a name="contents" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```typescript
public readonly contents: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername">applierUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds">delayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters">filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">tablesWithoutPrimaryKeyHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applierUsername`<sup>Required</sup> <a name="applierUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername"></a>

```typescript
public readonly applierUsername: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `delayInSeconds`<sup>Required</sup> <a name="delayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds"></a>

```typescript
public readonly delayInSeconds: number;
```

- *Type:* number

---

##### `filters`<sup>Required</sup> <a name="filters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters"></a>

```typescript
public readonly filters: DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a>

---

##### `tablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="tablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```typescript
public readonly tablesWithoutPrimaryKeyHandling: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocatedStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs">dataStorageSizeLimitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled">isAutoExpandStorageEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs">maxStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocatedStorageSizeInGbs`<sup>Required</sup> <a name="allocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```typescript
public readonly allocatedStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeLimitInGbs`<sup>Required</sup> <a name="dataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```typescript
public readonly dataStorageSizeLimitInGbs: number;
```

- *Type:* number

---

##### `isAutoExpandStorageEnabled`<sup>Required</sup> <a name="isAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```typescript
public readonly isAutoExpandStorageEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `maxStorageSizeInGbs`<sup>Required</sup> <a name="maxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```typescript
public readonly maxStorageSizeInGbs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsDataStorage;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention">automaticBackupRetention</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup">finalBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected">isDeleteProtected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automaticBackupRetention`<sup>Required</sup> <a name="automaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```typescript
public readonly automaticBackupRetention: string;
```

- *Type:* string

---

##### `finalBackup`<sup>Required</sup> <a name="finalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup"></a>

```typescript
public readonly finalBackup: string;
```

- *Type:* string

---

##### `isDeleteProtected`<sup>Required</sup> <a name="isDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```typescript
public readonly isDeleteProtected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails">statusDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetails`<sup>Required</sup> <a name="statusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails"></a>

```typescript
public readonly statusDetails: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsEndpoints;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize">clusterSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled">isLakehouseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterSize`<sup>Required</sup> <a name="clusterSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize"></a>

```typescript
public readonly clusterSize: number;
```

- *Type:* number

---

##### `isLakehouseEnabled`<sup>Required</sup> <a name="isLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```typescript
public readonly isLakehouseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime">windowStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `windowStartTime`<sup>Required</sup> <a name="windowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime"></a>

```typescript
public readonly windowStartTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsMaintenance;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername">adminUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy">backupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels">channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId">configurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery">crashRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement">currentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement">databaseManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage">dataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster">heatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel">hostnameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached">isHeatWaveClusterAttached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable">isHighlyAvailable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion">mysqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails">pointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX">portX</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections">secureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName">shapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType">shutdownType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `adminUsername`<sup>Required</sup> <a name="adminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `backupPolicy`<sup>Required</sup> <a name="backupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy"></a>

```typescript
public readonly backupPolicy: DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a>

---

##### `channels`<sup>Required</sup> <a name="channels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels"></a>

```typescript
public readonly channels: DataOciMysqlMysqlDbSystemsDbSystemsChannelsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `configurationId`<sup>Required</sup> <a name="configurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId"></a>

```typescript
public readonly configurationId: string;
```

- *Type:* string

---

##### `crashRecovery`<sup>Required</sup> <a name="crashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery"></a>

```typescript
public readonly crashRecovery: string;
```

- *Type:* string

---

##### `currentPlacement`<sup>Required</sup> <a name="currentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement"></a>

```typescript
public readonly currentPlacement: DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts"></a>

```typescript
public readonly customerContacts: DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a>

---

##### `databaseManagement`<sup>Required</sup> <a name="databaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement"></a>

```typescript
public readonly databaseManagement: string;
```

- *Type:* string

---

##### `dataStorage`<sup>Required</sup> <a name="dataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage"></a>

```typescript
public readonly dataStorage: DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a>

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `heatWaveCluster`<sup>Required</sup> <a name="heatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster"></a>

```typescript
public readonly heatWaveCluster: DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a>

---

##### `hostnameLabel`<sup>Required</sup> <a name="hostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel"></a>

```typescript
public readonly hostnameLabel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `isHeatWaveClusterAttached`<sup>Required</sup> <a name="isHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached"></a>

```typescript
public readonly isHeatWaveClusterAttached: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isHighlyAvailable`<sup>Required</sup> <a name="isHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable"></a>

```typescript
public readonly isHighlyAvailable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance"></a>

```typescript
public readonly maintenance: DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a>

---

##### `mysqlVersion`<sup>Required</sup> <a name="mysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion"></a>

```typescript
public readonly mysqlVersion: string;
```

- *Type:* string

---

##### `pointInTimeRecoveryDetails`<sup>Required</sup> <a name="pointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails"></a>

```typescript
public readonly pointInTimeRecoveryDetails: DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portX`<sup>Required</sup> <a name="portX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX"></a>

```typescript
public readonly portX: number;
```

- *Type:* number

---

##### `secureConnections`<sup>Required</sup> <a name="secureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections"></a>

```typescript
public readonly secureConnections: DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a>

---

##### `shapeName`<sup>Required</sup> <a name="shapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName"></a>

```typescript
public readonly shapeName: string;
```

- *Type:* string

---

##### `shutdownType`<sup>Required</sup> <a name="shutdownType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType"></a>

```typescript
public readonly shutdownType: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source"></a>

```typescript
public readonly source: DataOciMysqlMysqlDbSystemsDbSystemsSourceList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">timeEarliestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">timeLatestRecoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeEarliestRecoveryPoint`<sup>Required</sup> <a name="timeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```typescript
public readonly timeEarliestRecoveryPoint: string;
```

- *Type:* string

---

##### `timeLatestRecoveryPoint`<sup>Required</sup> <a name="timeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```typescript
public readonly timeLatestRecoveryPoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType">certificateGenerationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```typescript
public readonly certificateGenerationType: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint">recoveryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `recoveryPoint`<sup>Required</sup> <a name="recoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint"></a>

```typescript
public readonly recoveryPoint: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMysqlMysqlDbSystemsDbSystemsSource;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a>

---


### DataOciMysqlMysqlDbSystemsFilterList <a name="DataOciMysqlMysqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get"></a>

```typescript
public get(index: number): DataOciMysqlMysqlDbSystemsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlDbSystemsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>[]

---


### DataOciMysqlMysqlDbSystemsFilterOutputReference <a name="DataOciMysqlMysqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciMysqlMysqlDbSystems } from 'rhizo-co-terraform-provider-oci'

new dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciMysqlMysqlDbSystemsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter">DataOciMysqlMysqlDbSystemsFilter</a>

---



