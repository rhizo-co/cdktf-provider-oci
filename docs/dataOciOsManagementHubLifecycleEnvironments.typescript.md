# `dataOciOsManagementHubLifecycleEnvironments` Submodule <a name="`dataOciOsManagementHubLifecycleEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubLifecycleEnvironments <a name="DataOciOsManagementHubLifecycleEnvironments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments oci_os_management_hub_lifecycle_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments(scope: Construct, id: string, config?: DataOciOsManagementHubLifecycleEnvironmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig">DataOciOsManagementHubLifecycleEnvironmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig">DataOciOsManagementHubLifecycleEnvironmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType">resetArchType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId">resetLifecycleEnvironmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo">resetLocationNotEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubLifecycleEnvironmentsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]

---

##### `resetArchType` <a name="resetArchType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetArchType"></a>

```typescript
public resetArchType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleEnvironmentId` <a name="resetLifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLifecycleEnvironmentId"></a>

```typescript
public resetLifecycleEnvironmentId(): void
```

##### `resetLocation` <a name="resetLocation" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetLocationNotEqualTo` <a name="resetLocationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetLocationNotEqualTo"></a>

```typescript
public resetLocationNotEqualTo(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubLifecycleEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubLifecycleEnvironments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubLifecycleEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubLifecycleEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection">lifecycleEnvironmentCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput">archTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput">lifecycleEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput">locationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput">locationNotEqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput">osFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location">location</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubLifecycleEnvironmentsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList">DataOciOsManagementHubLifecycleEnvironmentsFilterList</a>

---

##### `lifecycleEnvironmentCollection`<sup>Required</sup> <a name="lifecycleEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentCollection"></a>

```typescript
public readonly lifecycleEnvironmentCollection: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList</a>

---

##### `archTypeInput`<sup>Optional</sup> <a name="archTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archTypeInput"></a>

```typescript
public readonly archTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubLifecycleEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentIdInput`<sup>Optional</sup> <a name="lifecycleEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentIdInput"></a>

```typescript
public readonly lifecycleEnvironmentIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationInput"></a>

```typescript
public readonly locationInput: string[];
```

- *Type:* string[]

---

##### `locationNotEqualToInput`<sup>Optional</sup> <a name="locationNotEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualToInput"></a>

```typescript
public readonly locationNotEqualToInput: string[];
```

- *Type:* string[]

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.location"></a>

```typescript
public readonly location: string[];
```

- *Type:* string[]

---

##### `locationNotEqualTo`<sup>Required</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.locationNotEqualTo"></a>

```typescript
public readonly locationNotEqualTo: string[];
```

- *Type:* string[]

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubLifecycleEnvironmentsConfig <a name="DataOciOsManagementHubLifecycleEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsConfig: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType">archType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location">location</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo">locationNotEqualTo</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily">osFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archType`<sup>Optional</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#arch_type DataOciOsManagementHubLifecycleEnvironments#arch_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#compartment_id DataOciOsManagementHubLifecycleEnvironments#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name DataOciOsManagementHubLifecycleEnvironments#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#display_name_contains DataOciOsManagementHubLifecycleEnvironments#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubLifecycleEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#filter DataOciOsManagementHubLifecycleEnvironments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#id DataOciOsManagementHubLifecycleEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleEnvironmentId`<sup>Optional</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#lifecycle_environment_id DataOciOsManagementHubLifecycleEnvironments#lifecycle_environment_id}.

---

##### `location`<sup>Optional</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.location"></a>

```typescript
public readonly location: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location DataOciOsManagementHubLifecycleEnvironments#location}.

---

##### `locationNotEqualTo`<sup>Optional</sup> <a name="locationNotEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.locationNotEqualTo"></a>

```typescript
public readonly locationNotEqualTo: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#location_not_equal_to DataOciOsManagementHubLifecycleEnvironments#location_not_equal_to}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#os_family DataOciOsManagementHubLifecycleEnvironments#os_family}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#state DataOciOsManagementHubLifecycleEnvironments#state}.

---

### DataOciOsManagementHubLifecycleEnvironmentsFilter <a name="DataOciOsManagementHubLifecycleEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsFilter: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#name DataOciOsManagementHubLifecycleEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#values DataOciOsManagementHubLifecycleEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_lifecycle_environments#regex DataOciOsManagementHubLifecycleEnvironments#regex}.

---

### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages = { ... }
```


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId: dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubLifecycleEnvironmentsFilterList <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubLifecycleEnvironmentsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>[]

---


### DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubLifecycleEnvironmentsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsFilter">DataOciOsManagementHubLifecycleEnvironmentsFilter</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages">stages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.stages"></a>

```typescript
public readonly stages: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItems</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName">lifecycleEnvironmentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId">lifecycleEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances">managedInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily">osFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank">rank</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId">softwareSourceId</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName">vendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentDisplayName`<sup>Required</sup> <a name="lifecycleEnvironmentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentDisplayName"></a>

```typescript
public readonly lifecycleEnvironmentDisplayName: string;
```

- *Type:* string

---

##### `lifecycleEnvironmentId`<sup>Required</sup> <a name="lifecycleEnvironmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.lifecycleEnvironmentId"></a>

```typescript
public readonly lifecycleEnvironmentId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `managedInstances`<sup>Required</sup> <a name="managedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.managedInstances"></a>

```typescript
public readonly managedInstances: number;
```

- *Type:* number

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.osFamily"></a>

```typescript
public readonly osFamily: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.vendorName"></a>

```typescript
public readonly vendorName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStages</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsStagesSoftwareSourceId</a>

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference <a name="DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubLifecycleEnvironments } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubLifecycleEnvironments.DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection">DataOciOsManagementHubLifecycleEnvironmentsLifecycleEnvironmentCollection</a>

---



