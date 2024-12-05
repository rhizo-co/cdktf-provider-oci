# `dataOciCapacityManagementOccHandoverResourceBlocks` Submodule <a name="`dataOciCapacityManagementOccHandoverResourceBlocks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccHandoverResourceBlocks <a name="DataOciCapacityManagementOccHandoverResourceBlocks" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks oci_capacity_management_occ_handover_resource_blocks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks(scope: Construct, id: string, config?: DataOciCapacityManagementOccHandoverResourceBlocksConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig">DataOciCapacityManagementOccHandoverResourceBlocksConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig">DataOciCapacityManagementOccHandoverResourceBlocksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo">resetHandoverDateGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo">resetHandoverDateLessThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverResourceName">resetHandoverResourceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOccHandoverResourceBlockId">resetOccHandoverResourceBlockId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCapacityManagementOccHandoverResourceBlocksFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetHandoverDateGreaterThanOrEqualTo` <a name="resetHandoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateGreaterThanOrEqualTo"></a>

```typescript
public resetHandoverDateGreaterThanOrEqualTo(): void
```

##### `resetHandoverDateLessThanOrEqualTo` <a name="resetHandoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverDateLessThanOrEqualTo"></a>

```typescript
public resetHandoverDateLessThanOrEqualTo(): void
```

##### `resetHandoverResourceName` <a name="resetHandoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetHandoverResourceName"></a>

```typescript
public resetHandoverResourceName(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOccHandoverResourceBlockId` <a name="resetOccHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.resetOccHandoverResourceBlockId"></a>

```typescript
public resetOccHandoverResourceBlockId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccHandoverResourceBlocks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCapacityManagementOccHandoverResourceBlocks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCapacityManagementOccHandoverResourceBlocks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccHandoverResourceBlocks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList">DataOciCapacityManagementOccHandoverResourceBlocksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection">occHandoverResourceBlockCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput">handoverDateGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput">handoverDateLessThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceNameInput">handoverResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput">occHandoverResourceBlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo">handoverDateGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo">handoverDateLessThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceName">handoverResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filter"></a>

```typescript
public readonly filter: DataOciCapacityManagementOccHandoverResourceBlocksFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList">DataOciCapacityManagementOccHandoverResourceBlocksFilterList</a>

---

##### `occHandoverResourceBlockCollection`<sup>Required</sup> <a name="occHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockCollection"></a>

```typescript
public readonly occHandoverResourceBlockCollection: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCapacityManagementOccHandoverResourceBlocksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]

---

##### `handoverDateGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="handoverDateGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualToInput"></a>

```typescript
public readonly handoverDateGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `handoverDateLessThanOrEqualToInput`<sup>Optional</sup> <a name="handoverDateLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualToInput"></a>

```typescript
public readonly handoverDateLessThanOrEqualToInput: string;
```

- *Type:* string

---

##### `handoverResourceNameInput`<sup>Optional</sup> <a name="handoverResourceNameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceNameInput"></a>

```typescript
public readonly handoverResourceNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `occHandoverResourceBlockIdInput`<sup>Optional</sup> <a name="occHandoverResourceBlockIdInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockIdInput"></a>

```typescript
public readonly occHandoverResourceBlockIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `handoverDateGreaterThanOrEqualTo`<sup>Required</sup> <a name="handoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateGreaterThanOrEqualTo"></a>

```typescript
public readonly handoverDateGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `handoverDateLessThanOrEqualTo`<sup>Required</sup> <a name="handoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverDateLessThanOrEqualTo"></a>

```typescript
public readonly handoverDateLessThanOrEqualTo: string;
```

- *Type:* string

---

##### `handoverResourceName`<sup>Required</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.handoverResourceName"></a>

```typescript
public readonly handoverResourceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occHandoverResourceBlockId`<sup>Required</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.occHandoverResourceBlockId"></a>

```typescript
public readonly occHandoverResourceBlockId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocks.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccHandoverResourceBlocksConfig <a name="DataOciCapacityManagementOccHandoverResourceBlocksConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksConfig: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementOccHandoverResourceBlocks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo">handoverDateGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo">handoverDateLessThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverResourceName">handoverResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementOccHandoverResourceBlocks#handover_resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#id DataOciCapacityManagementOccHandoverResourceBlocks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#namespace DataOciCapacityManagementOccHandoverResourceBlocks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId">occHandoverResourceBlockId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlocks#occ_handover_resource_block_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#compartment_id DataOciCapacityManagementOccHandoverResourceBlocks#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCapacityManagementOccHandoverResourceBlocksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#filter DataOciCapacityManagementOccHandoverResourceBlocks#filter}

---

##### `handoverDateGreaterThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateGreaterThanOrEqualTo"></a>

```typescript
public readonly handoverDateGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_greater_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_greater_than_or_equal_to}.

---

##### `handoverDateLessThanOrEqualTo`<sup>Optional</sup> <a name="handoverDateLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverDateLessThanOrEqualTo"></a>

```typescript
public readonly handoverDateLessThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_date_less_than_or_equal_to DataOciCapacityManagementOccHandoverResourceBlocks#handover_date_less_than_or_equal_to}.

---

##### `handoverResourceName`<sup>Optional</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.handoverResourceName"></a>

```typescript
public readonly handoverResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#handover_resource_name DataOciCapacityManagementOccHandoverResourceBlocks#handover_resource_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#id DataOciCapacityManagementOccHandoverResourceBlocks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#namespace DataOciCapacityManagementOccHandoverResourceBlocks#namespace}.

---

##### `occHandoverResourceBlockId`<sup>Optional</sup> <a name="occHandoverResourceBlockId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksConfig.property.occHandoverResourceBlockId"></a>

```typescript
public readonly occHandoverResourceBlockId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#occ_handover_resource_block_id DataOciCapacityManagementOccHandoverResourceBlocks#occ_handover_resource_block_id}.

---

### DataOciCapacityManagementOccHandoverResourceBlocksFilter <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksFilter: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#name DataOciCapacityManagementOccHandoverResourceBlocks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#values DataOciCapacityManagementOccHandoverResourceBlocks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#regex DataOciCapacityManagementOccHandoverResourceBlocks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#name DataOciCapacityManagementOccHandoverResourceBlocks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#values DataOciCapacityManagementOccHandoverResourceBlocks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_handover_resource_blocks#regex DataOciCapacityManagementOccHandoverResourceBlocks#regex}.

---

### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection = { ... }
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems = { ... }
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests = { ... }
```


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

const dataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails: dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccHandoverResourceBlocksFilterList <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccHandoverResourceBlocksFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>[]

---


### DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCapacityManagementOccHandoverResourceBlocksFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksFilter">DataOciCapacityManagementOccHandoverResourceBlocksFilter</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity">handoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId">occCapacityRequestId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `handoverQuantity`<sup>Required</sup> <a name="handoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.handoverQuantity"></a>

```typescript
public readonly handoverQuantity: string;
```

- *Type:* string

---

##### `occCapacityRequestId`<sup>Required</sup> <a name="occCapacityRequestId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.occCapacityRequestId"></a>

```typescript
public readonly occCapacityRequestId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequests</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests">associatedCapacityRequests</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate">handoverDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName">handoverResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId">occCustomerGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails">placementDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity">totalHandoverQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associatedCapacityRequests`<sup>Required</sup> <a name="associatedCapacityRequests" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.associatedCapacityRequests"></a>

```typescript
public readonly associatedCapacityRequests: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsAssociatedCapacityRequestsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `handoverDate`<sup>Required</sup> <a name="handoverDate" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverDate"></a>

```typescript
public readonly handoverDate: string;
```

- *Type:* string

---

##### `handoverResourceName`<sup>Required</sup> <a name="handoverResourceName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.handoverResourceName"></a>

```typescript
public readonly handoverResourceName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `occCustomerGroupId`<sup>Required</sup> <a name="occCustomerGroupId" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.occCustomerGroupId"></a>

```typescript
public readonly occCustomerGroupId: string;
```

- *Type:* string

---

##### `placementDetails`<sup>Required</sup> <a name="placementDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.placementDetails"></a>

```typescript
public readonly placementDetails: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList</a>

---

##### `totalHandoverQuantity`<sup>Required</sup> <a name="totalHandoverQuantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.totalHandoverQuantity"></a>

```typescript
public readonly totalHandoverQuantity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItems</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block">block</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building">building</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room">room</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType">workloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `block`<sup>Required</sup> <a name="block" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.block"></a>

```typescript
public readonly block: string;
```

- *Type:* string

---

##### `building`<sup>Required</sup> <a name="building" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.building"></a>

```typescript
public readonly building: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `room`<sup>Required</sup> <a name="room" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.room"></a>

```typescript
public readonly room: string;
```

- *Type:* string

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.workloadType"></a>

```typescript
public readonly workloadType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsPlacementDetails</a>

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get"></a>

```typescript
public get(index: number): DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference <a name="DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCapacityManagementOccHandoverResourceBlocks } from 'rhizo-co-terraform-provider-oci'

new dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccHandoverResourceBlocks.DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection">DataOciCapacityManagementOccHandoverResourceBlocksOccHandoverResourceBlockCollection</a>

---



