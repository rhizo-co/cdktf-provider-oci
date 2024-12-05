# `dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule <a name="`dataOciOsManagementHubSoftwareSourcePackageGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroups <a name="DataOciOsManagementHubSoftwareSourcePackageGroups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups oci_os_management_hub_software_source_package_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourcePackageGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig">DataOciOsManagementHubSoftwareSourcePackageGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig">DataOciOsManagementHubSoftwareSourcePackageGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType">resetGroupType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains">resetNameContains</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubSoftwareSourcePackageGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetGroupType` <a name="resetGroupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetGroupType"></a>

```typescript
public resetGroupType(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.resetNameContains"></a>

```typescript
public resetNameContains(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourcePackageGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourcePackageGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourcePackageGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourcePackageGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection">packageGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput">groupTypeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput">nameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType">groupType</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains">nameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList">DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList</a>

---

##### `packageGroupCollection`<sup>Required</sup> <a name="packageGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.packageGroupCollection"></a>

```typescript
public readonly packageGroupCollection: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubSoftwareSourcePackageGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]

---

##### `groupTypeInput`<sup>Optional</sup> <a name="groupTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupTypeInput"></a>

```typescript
public readonly groupTypeInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContainsInput"></a>

```typescript
public readonly nameContainsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.groupType"></a>

```typescript
public readonly groupType: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsConfig <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourcePackageGroupsConfig: dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType">groupType</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains">nameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#software_source_id DataOciOsManagementHubSoftwareSourcePackageGroups#software_source_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#compartment_id DataOciOsManagementHubSoftwareSourcePackageGroups#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubSoftwareSourcePackageGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#filter DataOciOsManagementHubSoftwareSourcePackageGroups#filter}

---

##### `groupType`<sup>Optional</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.groupType"></a>

```typescript
public readonly groupType: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#group_type DataOciOsManagementHubSoftwareSourcePackageGroups#group_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#id DataOciOsManagementHubSoftwareSourcePackageGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsConfig.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name_contains DataOciOsManagementHubSoftwareSourcePackageGroups#name_contains}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilter <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourcePackageGroupsFilter: dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#name DataOciOsManagementHubSoftwareSourcePackageGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#values DataOciOsManagementHubSoftwareSourcePackageGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_package_groups#regex DataOciOsManagementHubSoftwareSourcePackageGroups#regex}.

---

### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection: dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection = { ... }
```


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems: dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubSoftwareSourcePackageGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>[]

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubSoftwareSourcePackageGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsFilter">DataOciOsManagementHubSoftwareSourcePackageGroupsFilter</a>

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder">displayOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType">groupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault">isDefault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible">isUserVisible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages">packages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories">repositories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayOrder`<sup>Required</sup> <a name="displayOrder" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.displayOrder"></a>

```typescript
public readonly displayOrder: number;
```

- *Type:* number

---

##### `groupType`<sup>Required</sup> <a name="groupType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.groupType"></a>

```typescript
public readonly groupType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isDefault"></a>

```typescript
public readonly isDefault: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isUserVisible`<sup>Required</sup> <a name="isUserVisible" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.isUserVisible"></a>

```typescript
public readonly isUserVisible: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.repositories"></a>

```typescript
public readonly repositories: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourcePackageGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourcePackageGroups.DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection">DataOciOsManagementHubSoftwareSourcePackageGroupsPackageGroupCollection</a>

---



