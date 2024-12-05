# `dataOciCapacityManagementOccAvailabilityCatalogs` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogs <a name="DataOciCapacityManagementOccAvailabilityCatalogs" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs oci_capacity_management_occ_availability_catalogs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs(scope: Construct, id: string, config: DataOciCapacityManagementOccAvailabilityCatalogsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig">DataOciCapacityManagementOccAvailabilityCatalogsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig">DataOciCapacityManagementOccAvailabilityCatalogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState">resetCatalogState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]

---

##### `resetCatalogState` <a name="resetCatalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetCatalogState"></a>

```typescript
public resetCatalogState(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccAvailabilityCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection">occAvailabilityCatalogCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput">catalogStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState">catalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementOccAvailabilityCatalogsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList">DataOciCapacityManagementOccAvailabilityCatalogsFilterList</a>

---

##### `occAvailabilityCatalogCollection`<sup>Required</sup> <a name="occAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.occAvailabilityCatalogCollection"></a>

```typescript
public readonly occAvailabilityCatalogCollection: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList</a>

---

##### `catalogStateInput`<sup>Optional</sup> <a name="catalogStateInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogStateInput"></a>

```typescript
public readonly catalogStateInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `catalogState`<sup>Required</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.catalogState"></a>

```typescript
public readonly catalogState: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogsConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsConfig: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState">catalogState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#compartment_id DataOciCapacityManagementOccAvailabilityCatalogs#compartment_id}.

---

##### `catalogState`<sup>Optional</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.catalogState"></a>

```typescript
public readonly catalogState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#catalog_state DataOciCapacityManagementOccAvailabilityCatalogs#catalog_state}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#display_name DataOciCapacityManagementOccAvailabilityCatalogs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#filter DataOciCapacityManagementOccAvailabilityCatalogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#id DataOciCapacityManagementOccAvailabilityCatalogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#namespace DataOciCapacityManagementOccAvailabilityCatalogs#namespace}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsFilter <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsFilter: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#name DataOciCapacityManagementOccAvailabilityCatalogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#values DataOciCapacityManagementOccAvailabilityCatalogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalogs#regex DataOciCapacityManagementOccAvailabilityCatalogs#regex}.

---

### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection = { ... }
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems = { ... }
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails = { ... }
```


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails: dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogsFilterList <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>[]

---


### DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccAvailabilityCatalogsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsFilter">DataOciCapacityManagementOccAvailabilityCatalogsFilter</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity">availableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover">dateExpectedCapacityHandover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder">dateFinalCustomerOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity">demandedQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity">totalAvailableQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableQuantity`<sup>Required</sup> <a name="availableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.availableQuantity"></a>

```typescript
public readonly availableQuantity: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `dateExpectedCapacityHandover`<sup>Required</sup> <a name="dateExpectedCapacityHandover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateExpectedCapacityHandover"></a>

```typescript
public readonly dateExpectedCapacityHandover: string;
```

- *Type:* string

---

##### `dateFinalCustomerOrder`<sup>Required</sup> <a name="dateFinalCustomerOrder" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.dateFinalCustomerOrder"></a>

```typescript
public readonly dateFinalCustomerOrder: string;
```

- *Type:* string

---

##### `demandedQuantity`<sup>Required</sup> <a name="demandedQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.demandedQuantity"></a>

```typescript
public readonly demandedQuantity: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `totalAvailableQuantity`<sup>Required</sup> <a name="totalAvailableQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.totalAvailableQuantity"></a>

```typescript
public readonly totalAvailableQuantity: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion">formatVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatVersion`<sup>Required</sup> <a name="formatVersion" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.formatVersion"></a>

```typescript
public readonly formatVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetails</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails">base64EncodedCatalogDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState">catalogState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails">metadataDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base64EncodedCatalogDetails`<sup>Required</sup> <a name="base64EncodedCatalogDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.base64EncodedCatalogDetails"></a>

```typescript
public readonly base64EncodedCatalogDetails: string;
```

- *Type:* string

---

##### `catalogState`<sup>Required</sup> <a name="catalogState" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.catalogState"></a>

```typescript
public readonly catalogState: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.details"></a>

```typescript
public readonly details: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `metadataDetails`<sup>Required</sup> <a name="metadataDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.metadataDetails"></a>

```typescript
public readonly metadataDetails: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsMetadataDetailsList</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItems</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccAvailabilityCatalogs } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogs.DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection">DataOciCapacityManagementOccAvailabilityCatalogsOccAvailabilityCatalogCollection</a>

---



