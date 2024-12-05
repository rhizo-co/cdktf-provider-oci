# `dataOciDatabaseManagementExternalDbSystemConnectors` Submodule <a name="`dataOciDatabaseManagementExternalDbSystemConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectors <a name="DataOciDatabaseManagementExternalDbSystemConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors oci_database_management_external_db_system_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors(scope: Construct, id: string, config?: DataOciDatabaseManagementExternalDbSystemConnectorsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId">resetExternalDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementExternalDbSystemConnectorsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExternalDbSystemId` <a name="resetExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId"></a>

```typescript
public resetExternalDbSystemId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalDbSystemConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection">externalDbSystemConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput">externalDbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId">externalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalDbSystemConnectorCollection`<sup>Required</sup> <a name="externalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection"></a>

```typescript
public readonly externalDbSystemConnectorCollection: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementExternalDbSystemConnectorsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `externalDbSystemIdInput`<sup>Optional</sup> <a name="externalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput"></a>

```typescript
public readonly externalDbSystemIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementExternalDbSystemConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId"></a>

```typescript
public readonly externalDbSystemId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsConfig <a name="DataOciDatabaseManagementExternalDbSystemConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsConfig: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId">externalDbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}.

---

##### `externalDbSystemId`<sup>Optional</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId"></a>

```typescript
public readonly externalDbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementExternalDbSystemConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#filter DataOciDatabaseManagementExternalDbSystemConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential = { ... }
```


### DataOciDatabaseManagementExternalDbSystemConnectorsFilter <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalDbSystemConnectorsFilter: dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```typescript
public readonly credentialName: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```typescript
public readonly sslSecretId: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType">credentialType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```typescript
public readonly credentialType: string;
```

- *Type:* string

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```typescript
public readonly namedCredentialId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType">componentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential">databaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType"></a>

```typescript
public readonly componentType: string;
```

- *Type:* string

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials"></a>

```typescript
public readonly connectionCredentials: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString"></a>

```typescript
public readonly connectionString: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a>

---

##### `databaseCredential`<sup>Required</sup> <a name="databaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential"></a>

```typescript
public readonly databaseCredential: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage">connectionFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo">connectionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus">connectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType">connectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId">externalDbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated">timeConnectionStatusLastUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionFailureMessage`<sup>Required</sup> <a name="connectionFailureMessage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage"></a>

```typescript
public readonly connectionFailureMessage: string;
```

- *Type:* string

---

##### `connectionInfo`<sup>Required</sup> <a name="connectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo"></a>

```typescript
public readonly connectionInfo: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a>

---

##### `connectionStatus`<sup>Required</sup> <a name="connectionStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus"></a>

```typescript
public readonly connectionStatus: string;
```

- *Type:* string

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType"></a>

```typescript
public readonly connectorType: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `externalDbSystemId`<sup>Required</sup> <a name="externalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId"></a>

```typescript
public readonly externalDbSystemId: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeConnectionStatusLastUpdated`<sup>Required</sup> <a name="timeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```typescript
public readonly timeConnectionStatusLastUpdated: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalDbSystemConnectorsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>[]

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalDbSystemConnectors } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalDbSystemConnectorsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter">DataOciDatabaseManagementExternalDbSystemConnectorsFilter</a>

---



