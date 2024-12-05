# `dataOciDatabaseManagementDbManagementPrivateEndpoints` Submodule <a name="`dataOciDatabaseManagementDbManagementPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpoints <a name="DataOciDatabaseManagementDbManagementPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints oci_database_management_db_management_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints(scope: Construct, id: string, config: DataOciDatabaseManagementDbManagementPrivateEndpointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig">DataOciDatabaseManagementDbManagementPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig">DataOciDatabaseManagementDbManagementPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetIsCluster">resetIsCluster</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetIsDnsResolutionEnabled">resetIsDnsResolutionEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetVcnId">resetVcnId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCluster` <a name="resetIsCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetIsCluster"></a>

```typescript
public resetIsCluster(): void
```

##### `resetIsDnsResolutionEnabled` <a name="resetIsDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetIsDnsResolutionEnabled"></a>

```typescript
public resetIsDnsResolutionEnabled(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetState"></a>

```typescript
public resetState(): void
```

##### `resetVcnId` <a name="resetVcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.resetVcnId"></a>

```typescript
public resetVcnId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementDbManagementPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementDbManagementPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementDbManagementPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementDbManagementPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.dbManagementPrivateEndpointCollection">dbManagementPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isClusterInput">isClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isDnsResolutionEnabledInput">isDnsResolutionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.vcnIdInput">vcnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbManagementPrivateEndpointCollection`<sup>Required</sup> <a name="dbManagementPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.dbManagementPrivateEndpointCollection"></a>

```typescript
public readonly dbManagementPrivateEndpointCollection: DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList">DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isClusterInput`<sup>Optional</sup> <a name="isClusterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isClusterInput"></a>

```typescript
public readonly isClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDnsResolutionEnabledInput`<sup>Optional</sup> <a name="isDnsResolutionEnabledInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isDnsResolutionEnabledInput"></a>

```typescript
public readonly isDnsResolutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `vcnIdInput`<sup>Optional</sup> <a name="vcnIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.vcnIdInput"></a>

```typescript
public readonly vcnIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDnsResolutionEnabled`<sup>Required</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointsConfig <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointsConfig: dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#id DataOciDatabaseManagementDbManagementPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.isCluster">isCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#is_cluster DataOciDatabaseManagementDbManagementPrivateEndpoints#is_cluster}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#is_dns_resolution_enabled DataOciDatabaseManagementDbManagementPrivateEndpoints#is_dns_resolution_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#name DataOciDatabaseManagementDbManagementPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#state DataOciDatabaseManagementDbManagementPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.vcnId">vcnId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#vcn_id DataOciDatabaseManagementDbManagementPrivateEndpoints#vcn_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#compartment_id DataOciDatabaseManagementDbManagementPrivateEndpoints#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#filter DataOciDatabaseManagementDbManagementPrivateEndpoints#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#id DataOciDatabaseManagementDbManagementPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCluster`<sup>Optional</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.isCluster"></a>

```typescript
public readonly isCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#is_cluster DataOciDatabaseManagementDbManagementPrivateEndpoints#is_cluster}.

---

##### `isDnsResolutionEnabled`<sup>Optional</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#is_dns_resolution_enabled DataOciDatabaseManagementDbManagementPrivateEndpoints#is_dns_resolution_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#name DataOciDatabaseManagementDbManagementPrivateEndpoints#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#state DataOciDatabaseManagementDbManagementPrivateEndpoints#state}.

---

##### `vcnId`<sup>Optional</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsConfig.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#vcn_id DataOciDatabaseManagementDbManagementPrivateEndpoints#vcn_id}.

---

### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection: dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection = { ... }
```


### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems: dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems = { ... }
```


### DataOciDatabaseManagementDbManagementPrivateEndpointsFilter <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementDbManagementPrivateEndpointsFilter: dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#name DataOciDatabaseManagementDbManagementPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#values DataOciDatabaseManagementDbManagementPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#regex DataOciDatabaseManagementDbManagementPrivateEndpoints#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#name DataOciDatabaseManagementDbManagementPrivateEndpoints#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#values DataOciDatabaseManagementDbManagementPrivateEndpoints#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_db_management_private_endpoints#regex DataOciDatabaseManagementDbManagementPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.isCluster">isCluster</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.isDnsResolutionEnabled">isDnsResolutionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCluster`<sup>Required</sup> <a name="isCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.isCluster"></a>

```typescript
public readonly isCluster: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isDnsResolutionEnabled`<sup>Required</sup> <a name="isDnsResolutionEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.isDnsResolutionEnabled"></a>

```typescript
public readonly isDnsResolutionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```typescript
public readonly vcnId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItems</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection">DataOciDatabaseManagementDbManagementPrivateEndpointsDbManagementPrivateEndpointCollection</a>

---


### DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>[]

---


### DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference <a name="DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementDbManagementPrivateEndpoints } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementDbManagementPrivateEndpointsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementDbManagementPrivateEndpoints.DataOciDatabaseManagementDbManagementPrivateEndpointsFilter">DataOciDatabaseManagementDbManagementPrivateEndpointsFilter</a>

---



