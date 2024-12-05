# `dataOciDatabaseManagementExternalExadataInfrastructures` Submodule <a name="`dataOciDatabaseManagementExternalExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructures <a name="DataOciDatabaseManagementExternalExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures oci_database_management_external_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures(scope: Construct, id: string, config: DataOciDatabaseManagementExternalExadataInfrastructuresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig">DataOciDatabaseManagementExternalExadataInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDatabaseManagementExternalExadataInfrastructuresFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection">externalExadataInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `externalExadataInfrastructureCollection`<sup>Required</sup> <a name="externalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.externalExadataInfrastructureCollection"></a>

```typescript
public readonly externalExadataInfrastructureCollection: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filter"></a>

```typescript
public readonly filter: DataOciDatabaseManagementExternalExadataInfrastructuresFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList">DataOciDatabaseManagementExternalExadataInfrastructuresFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDatabaseManagementExternalExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresConfig <a name="DataOciDatabaseManagementExternalExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresConfig: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#compartment_id DataOciDatabaseManagementExternalExadataInfrastructures#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#display_name DataOciDatabaseManagementExternalExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDatabaseManagementExternalExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#filter DataOciDatabaseManagementExternalExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#id DataOciDatabaseManagementExternalExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection = { ... }
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems = { ... }
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems = { ... }
```


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid = { ... }
```


### DataOciDatabaseManagementExternalExadataInfrastructuresFilter <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciDatabaseManagementExternalExadataInfrastructuresFilter: dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#name DataOciDatabaseManagementExternalExadataInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#values DataOciDatabaseManagementExternalExadataInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_infrastructures#regex DataOciDatabaseManagementExternalExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments">databaseCompartments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems">databaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds">dbSystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey">discoveryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize">rackSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid">storageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames">storageServerNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `databaseCompartments`<sup>Required</sup> <a name="databaseCompartments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseCompartments"></a>

```typescript
public readonly databaseCompartments: string[];
```

- *Type:* string[]

---

##### `databaseSystems`<sup>Required</sup> <a name="databaseSystems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.databaseSystems"></a>

```typescript
public readonly databaseSystems: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsDatabaseSystemsList</a>

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.dbSystemIds"></a>

```typescript
public readonly dbSystemIds: string[];
```

- *Type:* string[]

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `discoveryKey`<sup>Required</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.discoveryKey"></a>

```typescript
public readonly discoveryKey: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `rackSize`<sup>Required</sup> <a name="rackSize" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.rackSize"></a>

```typescript
public readonly rackSize: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageGrid`<sup>Required</sup> <a name="storageGrid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageGrid"></a>

```typescript
public readonly storageGrid: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList</a>

---

##### `storageServerNames`<sup>Required</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.storageServerNames"></a>

```typescript
public readonly storageServerNames: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId">internalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount">serverCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalId"></a>

```typescript
public readonly internalId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.serverCount"></a>

```typescript
public readonly serverCount: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGridOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsStorageGrid</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection">DataOciDatabaseManagementExternalExadataInfrastructuresExternalExadataInfrastructureCollection</a>

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterList <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get"></a>

```typescript
public get(index: number): DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalExadataInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>[]

---


### DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDatabaseManagementExternalExadataInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDatabaseManagementExternalExadataInfrastructuresFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataInfrastructures.DataOciDatabaseManagementExternalExadataInfrastructuresFilter">DataOciDatabaseManagementExternalExadataInfrastructuresFilter</a>

---



