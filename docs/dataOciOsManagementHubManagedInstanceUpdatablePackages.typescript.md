# `dataOciOsManagementHubManagedInstanceUpdatablePackages` Submodule <a name="`dataOciOsManagementHubManagedInstanceUpdatablePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackages <a name="DataOciOsManagementHubManagedInstanceUpdatablePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages oci_os_management_hub_managed_instance_updatable_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig">DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig">DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetAdvisoryName">resetAdvisoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetClassificationType">resetClassificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]

---

##### `resetAdvisoryName` <a name="resetAdvisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetAdvisoryName"></a>

```typescript
public resetAdvisoryName(): void
```

##### `resetClassificationType` <a name="resetClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetClassificationType"></a>

```typescript
public resetClassificationType(): void
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceUpdatablePackages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceUpdatablePackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceUpdatablePackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceUpdatablePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceUpdatablePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.updatablePackageCollection">updatablePackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryNameInput">advisoryNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationTypeInput">classificationTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameInput">displayNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryName">advisoryName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationType">classificationType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayName">displayName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList</a>

---

##### `updatablePackageCollection`<sup>Required</sup> <a name="updatablePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.updatablePackageCollection"></a>

```typescript
public readonly updatablePackageCollection: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList</a>

---

##### `advisoryNameInput`<sup>Optional</sup> <a name="advisoryNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryNameInput"></a>

```typescript
public readonly advisoryNameInput: string[];
```

- *Type:* string[]

---

##### `classificationTypeInput`<sup>Optional</sup> <a name="classificationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationTypeInput"></a>

```typescript
public readonly classificationTypeInput: string[];
```

- *Type:* string[]

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `advisoryName`<sup>Required</sup> <a name="advisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.advisoryName"></a>

```typescript
public readonly advisoryName: string[];
```

- *Type:* string[]

---

##### `classificationType`<sup>Required</sup> <a name="classificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.classificationType"></a>

```typescript
public readonly classificationType: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceUpdatablePackagesConfig: dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.advisoryName">advisoryName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.classificationType">classificationType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayName">displayName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#managed_instance_id DataOciOsManagementHubManagedInstanceUpdatablePackages#managed_instance_id}.

---

##### `advisoryName`<sup>Optional</sup> <a name="advisoryName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.advisoryName"></a>

```typescript
public readonly advisoryName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#advisory_name DataOciOsManagementHubManagedInstanceUpdatablePackages#advisory_name}.

---

##### `classificationType`<sup>Optional</sup> <a name="classificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.classificationType"></a>

```typescript
public readonly classificationType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#classification_type DataOciOsManagementHubManagedInstanceUpdatablePackages#classification_type}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#compartment_id DataOciOsManagementHubManagedInstanceUpdatablePackages#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#display_name_contains DataOciOsManagementHubManagedInstanceUpdatablePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#filter DataOciOsManagementHubManagedInstanceUpdatablePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#id DataOciOsManagementHubManagedInstanceUpdatablePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceUpdatablePackagesFilter: dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#name DataOciOsManagementHubManagedInstanceUpdatablePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#values DataOciOsManagementHubManagedInstanceUpdatablePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#regex DataOciOsManagementHubManagedInstanceUpdatablePackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#name DataOciOsManagementHubManagedInstanceUpdatablePackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#values DataOciOsManagementHubManagedInstanceUpdatablePackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_updatable_packages#regex DataOciOsManagementHubManagedInstanceUpdatablePackages#regex}.

---

### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection: dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems: dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems = { ... }
```


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources: dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter">DataOciOsManagementHubManagedInstanceUpdatablePackagesFilter</a>

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.errata">errata</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.installedVersion">installedVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.packageClassification">packageClassification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.relatedCves">relatedCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.updateType">updateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `errata`<sup>Required</sup> <a name="errata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.errata"></a>

```typescript
public readonly errata: string[];
```

- *Type:* string[]

---

##### `installedVersion`<sup>Required</sup> <a name="installedVersion" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.installedVersion"></a>

```typescript
public readonly installedVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packageClassification`<sup>Required</sup> <a name="packageClassification" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.packageClassification"></a>

```typescript
public readonly packageClassification: string;
```

- *Type:* string

---

##### `relatedCves`<sup>Required</sup> <a name="relatedCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.relatedCves"></a>

```typescript
public readonly relatedCves: string[];
```

- *Type:* string[]

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.updateType"></a>

```typescript
public readonly updateType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceUpdatablePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceUpdatablePackages.DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection">DataOciOsManagementHubManagedInstanceUpdatablePackagesUpdatablePackageCollection</a>

---



