# `dataOciClusterPlacementGroupsClusterPlacementGroups` Submodule <a name="`dataOciClusterPlacementGroupsClusterPlacementGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroups <a name="DataOciClusterPlacementGroupsClusterPlacementGroups" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups oci_cluster_placement_groups_cluster_placement_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups(scope: Construct, id: string, config?: DataOciClusterPlacementGroupsClusterPlacementGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig">DataOciClusterPlacementGroupsClusterPlacementGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig">DataOciClusterPlacementGroupsClusterPlacementGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetAd">resetAd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciClusterPlacementGroupsClusterPlacementGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]

---

##### `resetAd` <a name="resetAd" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetAd"></a>

```typescript
public resetAd(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetName"></a>

```typescript
public resetName(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciClusterPlacementGroupsClusterPlacementGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciClusterPlacementGroupsClusterPlacementGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciClusterPlacementGroupsClusterPlacementGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciClusterPlacementGroupsClusterPlacementGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.clusterPlacementGroupCollection">clusterPlacementGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList">DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.adInput">adInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.ad">ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clusterPlacementGroupCollection`<sup>Required</sup> <a name="clusterPlacementGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.clusterPlacementGroupCollection"></a>

```typescript
public readonly clusterPlacementGroupCollection: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filter"></a>

```typescript
public readonly filter: DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList">DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList</a>

---

##### `adInput`<sup>Optional</sup> <a name="adInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.adInput"></a>

```typescript
public readonly adInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciClusterPlacementGroupsClusterPlacementGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction = { ... }
```


### DataOciClusterPlacementGroupsClusterPlacementGroupsConfig <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsConfig: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.ad">ad</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ad`<sup>Optional</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.ad"></a>

```typescript
public readonly ad: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#ad DataOciClusterPlacementGroupsClusterPlacementGroups#ad}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#compartment_id_in_subtree DataOciClusterPlacementGroupsClusterPlacementGroups#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciClusterPlacementGroupsClusterPlacementGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#filter DataOciClusterPlacementGroupsClusterPlacementGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#id DataOciClusterPlacementGroupsClusterPlacementGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#state DataOciClusterPlacementGroupsClusterPlacementGroups#state}.

---

### DataOciClusterPlacementGroupsClusterPlacementGroupsFilter <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciClusterPlacementGroupsClusterPlacementGroupsFilter: dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#values DataOciClusterPlacementGroupsClusterPlacementGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#regex DataOciClusterPlacementGroupsClusterPlacementGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#name DataOciClusterPlacementGroupsClusterPlacementGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#values DataOciClusterPlacementGroupsClusterPlacementGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cluster_placement_groups_cluster_placement_groups#regex DataOciClusterPlacementGroupsClusterPlacementGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.items"></a>

```typescript
public readonly items: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilities</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.capabilities">capabilities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.clusterPlacementGroupType">clusterPlacementGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.opcDryRun">opcDryRun</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.placementInstruction">placementInstruction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.capabilities"></a>

```typescript
public readonly capabilities: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsCapabilitiesList</a>

---

##### `clusterPlacementGroupType`<sup>Required</sup> <a name="clusterPlacementGroupType" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.clusterPlacementGroupType"></a>

```typescript
public readonly clusterPlacementGroupType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `opcDryRun`<sup>Required</sup> <a name="opcDryRun" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.opcDryRun"></a>

```typescript
public readonly opcDryRun: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `placementInstruction`<sup>Required</sup> <a name="placementInstruction" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.placementInstruction"></a>

```typescript
public readonly placementInstruction: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItems</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsPlacementInstruction</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection">DataOciClusterPlacementGroupsClusterPlacementGroupsClusterPlacementGroupCollection</a>

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciClusterPlacementGroupsClusterPlacementGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>[]

---


### DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference <a name="DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciClusterPlacementGroupsClusterPlacementGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciClusterPlacementGroupsClusterPlacementGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciClusterPlacementGroupsClusterPlacementGroups.DataOciClusterPlacementGroupsClusterPlacementGroupsFilter">DataOciClusterPlacementGroupsClusterPlacementGroupsFilter</a>

---



