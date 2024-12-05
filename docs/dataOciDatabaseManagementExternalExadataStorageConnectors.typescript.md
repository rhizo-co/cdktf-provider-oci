# `dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectors <a name="DataOciDatabaseManagementExternalExadataStorageConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors oci_database_management_external_exadata_storage_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataStorageConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig">DataOciDatabaseManagementExternalExadataStorageConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig">DataOciDatabaseManagementExternalExadataStorageConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementExternalExadataStorageConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataStorageConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection">externalExadataStorageConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput">externalExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalExadataStorageConnectorCollection`<sup>Required</sup> <a name="externalExadataStorageConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection"></a>

```typescript
public readonly externalExadataStorageConnectorCollection: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="externalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput"></a>

```typescript
public readonly externalExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementExternalExadataStorageConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsConfig <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageConnectorsConfig: dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId"></a>

```typescript
public readonly externalExadataInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementExternalExadataStorageConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#filter DataOciDatabaseManagementExternalExadataStorageConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection: dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection = { ... }
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems: dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems = { ... }
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo: dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo = { ... }
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilter <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataStorageConnectorsFilter: dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation">sslTrustStoreLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword">sslTrustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType">sslTrustStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `sslTrustStoreLocation`<sup>Required</sup> <a name="sslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```typescript
public readonly sslTrustStoreLocation: string;
```

- *Type:* string

---

##### `sslTrustStorePassword`<sup>Required</sup> <a name="sslTrustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```typescript
public readonly sslTrustStorePassword: string;
```

- *Type:* string

---

##### `sslTrustStoreType`<sup>Required</sup> <a name="sslTrustStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```typescript
public readonly sslTrustStoreType: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo">credentialInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId">storageServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `credentialInfo`<sup>Required</sup> <a name="credentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo"></a>

```typescript
public readonly credentialInfo: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageServerId`<sup>Required</sup> <a name="storageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId"></a>

```typescript
public readonly storageServerId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalExadataStorageConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>[]

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataStorageConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalExadataStorageConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter">DataOciDatabaseManagementExternalExadataStorageConnectorsFilter</a>

---



