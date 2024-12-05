# `dataOciDatabaseToolsDatabaseToolsEndpointServices` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsEndpointServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServices <a name="DataOciDatabaseToolsDatabaseToolsEndpointServices" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services oci_database_tools_database_tools_endpoint_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices(scope: Construct, id: string, config: DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig">DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig">DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsEndpointServices resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsEndpointServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsEndpointServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseToolsDatabaseToolsEndpointServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsEndpointServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.databaseToolsEndpointServiceCollection">databaseToolsEndpointServiceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `databaseToolsEndpointServiceCollection`<sup>Required</sup> <a name="databaseToolsEndpointServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.databaseToolsEndpointServiceCollection"></a>

```typescript
public readonly databaseToolsEndpointServiceCollection: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsEndpointServicesConfig: dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#compartment_id DataOciDatabaseToolsDatabaseToolsEndpointServices#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#display_name DataOciDatabaseToolsDatabaseToolsEndpointServices#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#filter DataOciDatabaseToolsDatabaseToolsEndpointServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#id DataOciDatabaseToolsDatabaseToolsEndpointServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#state DataOciDatabaseToolsDatabaseToolsEndpointServices#state}.

---

### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection: dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection = { ... }
```


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems: dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems = { ... }
```


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseToolsDatabaseToolsEndpointServicesFilter: dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#values DataOciDatabaseToolsDatabaseToolsEndpointServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#regex DataOciDatabaseToolsDatabaseToolsEndpointServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#name DataOciDatabaseToolsDatabaseToolsEndpointServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#values DataOciDatabaseToolsDatabaseToolsEndpointServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_endpoint_services#regex DataOciDatabaseToolsDatabaseToolsEndpointServices#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection">DataOciDatabaseToolsDatabaseToolsEndpointServicesDatabaseToolsEndpointServiceCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>[]

---


### DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseToolsDatabaseToolsEndpointServices } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsEndpointServices.DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter">DataOciDatabaseToolsDatabaseToolsEndpointServicesFilter</a>

---



