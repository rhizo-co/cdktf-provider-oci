# `dataOciComputeCloudAtCustomerCccInfrastructures` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructures <a name="DataOciComputeCloudAtCustomerCccInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures oci_compute_cloud_at_customer_ccc_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures(scope: Construct, id: string, config?: DataOciComputeCloudAtCustomerCccInfrastructuresConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig">DataOciComputeCloudAtCustomerCccInfrastructuresConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig">DataOciComputeCloudAtCustomerCccInfrastructuresConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId">resetCccInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciComputeCloudAtCustomerCccInfrastructuresFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetCccInfrastructureId` <a name="resetCccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCccInfrastructureId"></a>

```typescript
public resetCccInfrastructureId(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructures to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection">cccInfrastructureCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput">cccInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cccInfrastructureCollection`<sup>Required</sup> <a name="cccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureCollection"></a>

```typescript
public readonly cccInfrastructureCollection: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filter"></a>

```typescript
public readonly filter: DataOciComputeCloudAtCustomerCccInfrastructuresFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList">DataOciComputeCloudAtCustomerCccInfrastructuresFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `cccInfrastructureIdInput`<sup>Optional</sup> <a name="cccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureIdInput"></a>

```typescript
public readonly cccInfrastructureIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciComputeCloudAtCustomerCccInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `cccInfrastructureId`<sup>Required</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.cccInfrastructureId"></a>

```typescript
public readonly cccInfrastructureId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructures.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation = { ... }
```


### DataOciComputeCloudAtCustomerCccInfrastructuresConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresConfig: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId">cccInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#access_level DataOciComputeCloudAtCustomerCccInfrastructures#access_level}.

---

##### `cccInfrastructureId`<sup>Optional</sup> <a name="cccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.cccInfrastructureId"></a>

```typescript
public readonly cccInfrastructureId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructures#ccc_infrastructure_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#compartment_id_in_subtree DataOciComputeCloudAtCustomerCccInfrastructures#compartment_id_in_subtree}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name DataOciComputeCloudAtCustomerCccInfrastructures#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#display_name_contains DataOciComputeCloudAtCustomerCccInfrastructures#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciComputeCloudAtCustomerCccInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#filter DataOciComputeCloudAtCustomerCccInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#id DataOciComputeCloudAtCustomerCccInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#state DataOciComputeCloudAtCustomerCccInfrastructures#state}.

---

### DataOciComputeCloudAtCustomerCccInfrastructuresFilter <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

const dataOciComputeCloudAtCustomerCccInfrastructuresFilter: dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#name DataOciComputeCloudAtCustomerCccInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#values DataOciComputeCloudAtCustomerCccInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructures#regex DataOciComputeCloudAtCustomerCccInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">capacityStorageTrayCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount">computeNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount">managementNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">performanceStorageTrayCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityStorageTrayCount`<sup>Required</sup> <a name="capacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```typescript
public readonly capacityStorageTrayCount: number;
```

- *Type:* number

---

##### `computeNodeCount`<sup>Required</sup> <a name="computeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```typescript
public readonly computeNodeCount: number;
```

- *Type:* number

---

##### `managementNodeCount`<sup>Required</sup> <a name="managementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```typescript
public readonly managementNodeCount: number;
```

- *Type:* number

---

##### `performanceStorageTrayCount`<sup>Required</sup> <a name="performanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```typescript
public readonly performanceStorageTrayCount: number;
```

- *Type:* number

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">bgpTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">oracleAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">peerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bgpTopology`<sup>Required</sup> <a name="bgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```typescript
public readonly bgpTopology: string;
```

- *Type:* string

---

##### `oracleAsn`<sup>Required</sup> <a name="oracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```typescript
public readonly oracleAsn: number;
```

- *Type:* number

---

##### `peerInformation`<sup>Required</sup> <a name="peerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```typescript
public readonly peerInformation: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">uplinkHsrpGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">uplinkVlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uplinkHsrpGroup`<sup>Required</sup> <a name="uplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```typescript
public readonly uplinkHsrpGroup: number;
```

- *Type:* number

---

##### `uplinkVlan`<sup>Required</sup> <a name="uplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```typescript
public readonly uplinkVlan: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `ip`<sup>Required</sup> <a name="ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```typescript
public readonly ip: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps">dnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">infrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">infrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes">managementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">mgmtVipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">mgmtVipIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps">spineIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip">spineVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">uplinkDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">uplinkGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">uplinkNetmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">uplinkPortCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">uplinkPortForwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">uplinkPortSpeedInGbps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">uplinkVlanMtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsIps`<sup>Required</sup> <a name="dnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```typescript
public readonly dnsIps: string[];
```

- *Type:* string[]

---

##### `infrastructureRoutingDynamic`<sup>Required</sup> <a name="infrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```typescript
public readonly infrastructureRoutingDynamic: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `infrastructureRoutingStatic`<sup>Required</sup> <a name="infrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```typescript
public readonly infrastructureRoutingStatic: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `managementNodes`<sup>Required</sup> <a name="managementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```typescript
public readonly managementNodes: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `mgmtVipHostname`<sup>Required</sup> <a name="mgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```typescript
public readonly mgmtVipHostname: string;
```

- *Type:* string

---

##### `mgmtVipIp`<sup>Required</sup> <a name="mgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```typescript
public readonly mgmtVipIp: string;
```

- *Type:* string

---

##### `spineIps`<sup>Required</sup> <a name="spineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```typescript
public readonly spineIps: string[];
```

- *Type:* string[]

---

##### `spineVip`<sup>Required</sup> <a name="spineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```typescript
public readonly spineVip: string;
```

- *Type:* string

---

##### `uplinkDomain`<sup>Required</sup> <a name="uplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```typescript
public readonly uplinkDomain: string;
```

- *Type:* string

---

##### `uplinkGatewayIp`<sup>Required</sup> <a name="uplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```typescript
public readonly uplinkGatewayIp: string;
```

- *Type:* string

---

##### `uplinkNetmask`<sup>Required</sup> <a name="uplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```typescript
public readonly uplinkNetmask: string;
```

- *Type:* string

---

##### `uplinkPortCount`<sup>Required</sup> <a name="uplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```typescript
public readonly uplinkPortCount: number;
```

- *Type:* number

---

##### `uplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="uplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```typescript
public readonly uplinkPortForwardErrorCorrection: string;
```

- *Type:* string

---

##### `uplinkPortSpeedInGbps`<sup>Required</sup> <a name="uplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```typescript
public readonly uplinkPortSpeedInGbps: number;
```

- *Type:* number

---

##### `uplinkVlanMtu`<sup>Required</sup> <a name="uplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```typescript
public readonly uplinkVlanMtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId">cccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails">connectionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState">connectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory">infrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration">infrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint">provisioningFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin">provisioningPin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation">upgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cccUpgradeScheduleId`<sup>Required</sup> <a name="cccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.cccUpgradeScheduleId"></a>

```typescript
public readonly cccUpgradeScheduleId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionDetails`<sup>Required</sup> <a name="connectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionDetails"></a>

```typescript
public readonly connectionDetails: string;
```

- *Type:* string

---

##### `connectionState`<sup>Required</sup> <a name="connectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.connectionState"></a>

```typescript
public readonly connectionState: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureInventory`<sup>Required</sup> <a name="infrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureInventory"></a>

```typescript
public readonly infrastructureInventory: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureInventoryList</a>

---

##### `infrastructureNetworkConfiguration`<sup>Required</sup> <a name="infrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.infrastructureNetworkConfiguration"></a>

```typescript
public readonly infrastructureNetworkConfiguration: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsInfrastructureNetworkConfigurationList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `provisioningFingerprint`<sup>Required</sup> <a name="provisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningFingerprint"></a>

```typescript
public readonly provisioningFingerprint: string;
```

- *Type:* string

---

##### `provisioningPin`<sup>Required</sup> <a name="provisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.provisioningPin"></a>

```typescript
public readonly provisioningPin: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `upgradeInformation`<sup>Required</sup> <a name="upgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.upgradeInformation"></a>

```typescript
public readonly upgradeInformation: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItems</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive">isActive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration">scheduledUpgradeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">timeOfScheduledUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `isActive`<sup>Required</sup> <a name="isActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.isActive"></a>

```typescript
public readonly isActive: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `scheduledUpgradeDuration`<sup>Required</sup> <a name="scheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```typescript
public readonly scheduledUpgradeDuration: string;
```

- *Type:* string

---

##### `timeOfScheduledUpgrade`<sup>Required</sup> <a name="timeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```typescript
public readonly timeOfScheduledUpgrade: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsUpgradeInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection">DataOciComputeCloudAtCustomerCccInfrastructuresCccInfrastructureCollection</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterList <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get"></a>

```typescript
public get(index: number): DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciComputeCloudAtCustomerCccInfrastructuresFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>[]

---


### DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer"></a>

```typescript
import { dataOciComputeCloudAtCustomerCccInfrastructures } from 'rhizo-co-terraform-provider-oci'

new dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciComputeCloudAtCustomerCccInfrastructuresFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructures.DataOciComputeCloudAtCustomerCccInfrastructuresFilter">DataOciComputeCloudAtCustomerCccInfrastructuresFilter</a>

---



