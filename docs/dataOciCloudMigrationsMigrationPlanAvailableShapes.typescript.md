# `dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule <a name="`dataOciCloudMigrationsMigrationPlanAvailableShapes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapes <a name="DataOciCloudMigrationsMigrationPlanAvailableShapes" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes oci_cloud_migrations_migration_plan_available_shapes}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationPlanAvailableShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig">DataOciCloudMigrationsMigrationPlanAvailableShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig">DataOciCloudMigrationsMigrationPlanAvailableShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId">resetDvhHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId">resetReservedCapacityId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetAvailabilityDomain"></a>

```typescript
public resetAvailabilityDomain(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDvhHostId` <a name="resetDvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetDvhHostId"></a>

```typescript
public resetDvhHostId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReservedCapacityId` <a name="resetReservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.resetReservedCapacityId"></a>

```typescript
public resetReservedCapacityId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection">availableShapesCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput">dvhHostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput">migrationPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput">reservedCapacityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId">dvhHostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId">migrationPlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId">reservedCapacityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `availableShapesCollection`<sup>Required</sup> <a name="availableShapesCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availableShapesCollection"></a>

```typescript
public readonly availableShapesCollection: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filter"></a>

```typescript
public readonly filter: DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList">DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomainInput"></a>

```typescript
public readonly availabilityDomainInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dvhHostIdInput`<sup>Optional</sup> <a name="dvhHostIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostIdInput"></a>

```typescript
public readonly dvhHostIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `migrationPlanIdInput`<sup>Optional</sup> <a name="migrationPlanIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanIdInput"></a>

```typescript
public readonly migrationPlanIdInput: string;
```

- *Type:* string

---

##### `reservedCapacityIdInput`<sup>Optional</sup> <a name="reservedCapacityIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityIdInput"></a>

```typescript
public readonly reservedCapacityIdInput: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dvhHostId`<sup>Required</sup> <a name="dvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.dvhHostId"></a>

```typescript
public readonly dvhHostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `migrationPlanId`<sup>Required</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.migrationPlanId"></a>

```typescript
public readonly migrationPlanId: string;
```

- *Type:* string

---

##### `reservedCapacityId`<sup>Required</sup> <a name="reservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.reservedCapacityId"></a>

```typescript
public readonly reservedCapacityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection: dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection = { ... }
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems: dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems = { ... }
```


### DataOciCloudMigrationsMigrationPlanAvailableShapesConfig <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanAvailableShapesConfig: dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId">migrationPlanId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId">dvhHostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId">reservedCapacityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `migrationPlanId`<sup>Required</sup> <a name="migrationPlanId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.migrationPlanId"></a>

```typescript
public readonly migrationPlanId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}.

---

##### `dvhHostId`<sup>Optional</sup> <a name="dvhHostId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.dvhHostId"></a>

```typescript
public readonly dvhHostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#filter DataOciCloudMigrationsMigrationPlanAvailableShapes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `reservedCapacityId`<sup>Optional</sup> <a name="reservedCapacityId" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesConfig.property.reservedCapacityId"></a>

```typescript
public readonly reservedCapacityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}.

---

### DataOciCloudMigrationsMigrationPlanAvailableShapesFilter <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudMigrationsMigrationPlanAvailableShapesFilter: dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription">gpuDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus">gpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription">localDiskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks">localDisks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs">localDisksTotalSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments">maxVnicAttachments</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired">minTotalBaselineOcpusRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps">networkingBandwidthInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus">ocpus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken">paginationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription">processorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gpuDescription`<sup>Required</sup> <a name="gpuDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpuDescription"></a>

```typescript
public readonly gpuDescription: string;
```

- *Type:* string

---

##### `gpus`<sup>Required</sup> <a name="gpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.gpus"></a>

```typescript
public readonly gpus: number;
```

- *Type:* number

---

##### `localDiskDescription`<sup>Required</sup> <a name="localDiskDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDiskDescription"></a>

```typescript
public readonly localDiskDescription: string;
```

- *Type:* string

---

##### `localDisks`<sup>Required</sup> <a name="localDisks" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisks"></a>

```typescript
public readonly localDisks: number;
```

- *Type:* number

---

##### `localDisksTotalSizeInGbs`<sup>Required</sup> <a name="localDisksTotalSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.localDisksTotalSizeInGbs"></a>

```typescript
public readonly localDisksTotalSizeInGbs: number;
```

- *Type:* number

---

##### `maxVnicAttachments`<sup>Required</sup> <a name="maxVnicAttachments" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.maxVnicAttachments"></a>

```typescript
public readonly maxVnicAttachments: number;
```

- *Type:* number

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.memoryInGbs"></a>

```typescript
public readonly memoryInGbs: number;
```

- *Type:* number

---

##### `minTotalBaselineOcpusRequired`<sup>Required</sup> <a name="minTotalBaselineOcpusRequired" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.minTotalBaselineOcpusRequired"></a>

```typescript
public readonly minTotalBaselineOcpusRequired: number;
```

- *Type:* number

---

##### `networkingBandwidthInGbps`<sup>Required</sup> <a name="networkingBandwidthInGbps" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.networkingBandwidthInGbps"></a>

```typescript
public readonly networkingBandwidthInGbps: number;
```

- *Type:* number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.ocpus"></a>

```typescript
public readonly ocpus: number;
```

- *Type:* number

---

##### `paginationToken`<sup>Required</sup> <a name="paginationToken" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.paginationToken"></a>

```typescript
public readonly paginationToken: string;
```

- *Type:* string

---

##### `processorDescription`<sup>Required</sup> <a name="processorDescription" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.processorDescription"></a>

```typescript
public readonly processorDescription: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection">DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection</a>

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>[]

---


### DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference <a name="DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudMigrationsMigrationPlanAvailableShapes } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudMigrationsMigrationPlanAvailableShapesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudMigrationsMigrationPlanAvailableShapes.DataOciCloudMigrationsMigrationPlanAvailableShapesFilter">DataOciCloudMigrationsMigrationPlanAvailableShapesFilter</a>

---



