# `dataOciDataSafeTargetAlertPolicyAssociations` Submodule <a name="`dataOciDataSafeTargetAlertPolicyAssociations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetAlertPolicyAssociations <a name="DataOciDataSafeTargetAlertPolicyAssociations" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations oci_data_safe_target_alert_policy_associations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations(scope: Construct, id: string, config: DataOciDataSafeTargetAlertPolicyAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig">DataOciDataSafeTargetAlertPolicyAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig">DataOciDataSafeTargetAlertPolicyAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId">resetAlertPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId">resetTargetAlertPolicyAssociationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo">resetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan">resetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciDataSafeTargetAlertPolicyAssociationsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetAlertPolicyId` <a name="resetAlertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetAlertPolicyId"></a>

```typescript
public resetAlertPolicyId(): void
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetCompartmentIdInSubtree"></a>

```typescript
public resetCompartmentIdInSubtree(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetAlertPolicyAssociationId` <a name="resetTargetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetAlertPolicyAssociationId"></a>

```typescript
public resetTargetAlertPolicyAssociationId(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTimeCreatedGreaterThanOrEqualTo` <a name="resetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedGreaterThanOrEqualTo"></a>

```typescript
public resetTimeCreatedGreaterThanOrEqualTo(): void
```

##### `resetTimeCreatedLessThan` <a name="resetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.resetTimeCreatedLessThan"></a>

```typescript
public resetTimeCreatedLessThan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciDataSafeTargetAlertPolicyAssociations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeTargetAlertPolicyAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeTargetAlertPolicyAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetAlertPolicyAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection">targetAlertPolicyAssociationCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput">alertPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput">targetAlertPolicyAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput">timeCreatedGreaterThanOrEqualToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput">timeCreatedLessThanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId">alertPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId">targetAlertPolicyAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filter"></a>

```typescript
public readonly filter: DataOciDataSafeTargetAlertPolicyAssociationsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList">DataOciDataSafeTargetAlertPolicyAssociationsFilterList</a>

---

##### `targetAlertPolicyAssociationCollection`<sup>Required</sup> <a name="targetAlertPolicyAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationCollection"></a>

```typescript
public readonly targetAlertPolicyAssociationCollection: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `alertPolicyIdInput`<sup>Optional</sup> <a name="alertPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyIdInput"></a>

```typescript
public readonly alertPolicyIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtreeInput"></a>

```typescript
public readonly compartmentIdInSubtreeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciDataSafeTargetAlertPolicyAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetAlertPolicyAssociationIdInput`<sup>Optional</sup> <a name="targetAlertPolicyAssociationIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationIdInput"></a>

```typescript
public readonly targetAlertPolicyAssociationIdInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualToInput"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualToInput: string;
```

- *Type:* string

---

##### `timeCreatedLessThanInput`<sup>Optional</sup> <a name="timeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThanInput"></a>

```typescript
public readonly timeCreatedLessThanInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `alertPolicyId`<sup>Required</sup> <a name="alertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.alertPolicyId"></a>

```typescript
public readonly alertPolicyId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetAlertPolicyAssociationId`<sup>Required</sup> <a name="targetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetAlertPolicyAssociationId"></a>

```typescript
public readonly targetAlertPolicyAssociationId: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

---

##### `timeCreatedLessThan`<sup>Required</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsConfig <a name="DataOciDataSafeTargetAlertPolicyAssociationsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetAlertPolicyAssociationsConfig: dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId">alertPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId">targetAlertPolicyAssociationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo">timeCreatedGreaterThanOrEqualTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan">timeCreatedLessThan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id DataOciDataSafeTargetAlertPolicyAssociations#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#access_level DataOciDataSafeTargetAlertPolicyAssociations#access_level}.

---

##### `alertPolicyId`<sup>Optional</sup> <a name="alertPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.alertPolicyId"></a>

```typescript
public readonly alertPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#alert_policy_id DataOciDataSafeTargetAlertPolicyAssociations#alert_policy_id}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.compartmentIdInSubtree"></a>

```typescript
public readonly compartmentIdInSubtree: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#compartment_id_in_subtree DataOciDataSafeTargetAlertPolicyAssociations#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciDataSafeTargetAlertPolicyAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#filter DataOciDataSafeTargetAlertPolicyAssociations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#id DataOciDataSafeTargetAlertPolicyAssociations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#state DataOciDataSafeTargetAlertPolicyAssociations#state}.

---

##### `targetAlertPolicyAssociationId`<sup>Optional</sup> <a name="targetAlertPolicyAssociationId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetAlertPolicyAssociationId"></a>

```typescript
public readonly targetAlertPolicyAssociationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_alert_policy_association_id DataOciDataSafeTargetAlertPolicyAssociations#target_alert_policy_association_id}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#target_id DataOciDataSafeTargetAlertPolicyAssociations#target_id}.

---

##### `timeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```typescript
public readonly timeCreatedGreaterThanOrEqualTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_greater_than_or_equal_to DataOciDataSafeTargetAlertPolicyAssociations#time_created_greater_than_or_equal_to}.

---

##### `timeCreatedLessThan`<sup>Optional</sup> <a name="timeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsConfig.property.timeCreatedLessThan"></a>

```typescript
public readonly timeCreatedLessThan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#time_created_less_than DataOciDataSafeTargetAlertPolicyAssociations#time_created_less_than}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsFilter <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetAlertPolicyAssociationsFilter: dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#name DataOciDataSafeTargetAlertPolicyAssociations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#values DataOciDataSafeTargetAlertPolicyAssociations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_alert_policy_associations#regex DataOciDataSafeTargetAlertPolicyAssociations#regex}.

---

### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection: dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection = { ... }
```


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

const dataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems: dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetAlertPolicyAssociationsFilterList <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetAlertPolicyAssociationsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>[]

---


### DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciDataSafeTargetAlertPolicyAssociationsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsFilter">DataOciDataSafeTargetAlertPolicyAssociationsFilter</a>

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled">isEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItems</a>

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get"></a>

```typescript
public get(index: number): DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference <a name="DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciDataSafeTargetAlertPolicyAssociations } from 'rhizo-co-terraform-provider-oci'

new dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetAlertPolicyAssociations.DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection">DataOciDataSafeTargetAlertPolicyAssociationsTargetAlertPolicyAssociationCollection</a>

---



