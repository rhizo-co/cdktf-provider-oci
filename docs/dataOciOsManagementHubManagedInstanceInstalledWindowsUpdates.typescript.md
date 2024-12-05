# `dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates` Submodule <a name="`dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates oci_os_management_hub_managed_instance_installed_windows_updates}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates(scope: Construct, id: string, config: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.installedWindowsUpdateCollection">installedWindowsUpdateCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.nameInput">nameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.name">name</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList</a>

---

##### `installedWindowsUpdateCollection`<sup>Required</sup> <a name="installedWindowsUpdateCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.installedWindowsUpdateCollection"></a>

```typescript
public readonly installedWindowsUpdateCollection: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.nameInput"></a>

```typescript
public readonly nameInput: string[];
```

- *Type:* string[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.name"></a>

```typescript
public readonly name: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig: dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.name">name</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#managed_instance_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#managed_instance_id}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#compartment_id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#display_name_contains DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#filter DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#id DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesConfig.property.name"></a>

```typescript
public readonly name: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}.

---

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter: dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#values DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#regex DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#name DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#values DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_installed_windows_updates#regex DataOciOsManagementHubManagedInstanceInstalledWindowsUpdates#regex}.

---

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection: dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection = { ... }
```


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems: dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>[]

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesFilter</a>

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateId">updateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateType">updateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `updateId`<sup>Required</sup> <a name="updateId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateId"></a>

```typescript
public readonly updateId: string;
```

- *Type:* string

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.updateType"></a>

```typescript
public readonly updateType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceInstalledWindowsUpdates.DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection">DataOciOsManagementHubManagedInstanceInstalledWindowsUpdatesInstalledWindowsUpdateCollection</a>

---



