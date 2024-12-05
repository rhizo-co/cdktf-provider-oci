# `dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule <a name="`dataOciOsManagementHubSoftwareSourceSoftwarePackages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackages <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages oci_os_management_hub_software_source_software_packages}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages(scope: Construct, id: string, config: DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig">DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains">resetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest">resetIsLatest</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetDisplayNameContains` <a name="resetDisplayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetDisplayNameContains"></a>

```typescript
public resetDisplayNameContains(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLatest` <a name="resetIsLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.resetIsLatest"></a>

```typescript
public resetIsLatest(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceSoftwarePackages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsManagementHubSoftwareSourceSoftwarePackages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceSoftwarePackages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection">softwarePackageCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput">displayNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput">isLatestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput">softwareSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest">isLatest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filter"></a>

```typescript
public readonly filter: DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList</a>

---

##### `softwarePackageCollection`<sup>Required</sup> <a name="softwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwarePackageCollection"></a>

```typescript
public readonly softwarePackageCollection: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList</a>

---

##### `displayNameContainsInput`<sup>Optional</sup> <a name="displayNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContainsInput"></a>

```typescript
public readonly displayNameContainsInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLatestInput`<sup>Optional</sup> <a name="isLatestInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatestInput"></a>

```typescript
public readonly isLatestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `softwareSourceIdInput`<sup>Optional</sup> <a name="softwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceIdInput"></a>

```typescript
public readonly softwareSourceIdInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `displayNameContains`<sup>Required</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLatest`<sup>Required</sup> <a name="isLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.isLatest"></a>

```typescript
public readonly isLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackages.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId">softwareSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains">displayNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest">isLatest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `softwareSourceId`<sup>Required</sup> <a name="softwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.softwareSourceId"></a>

```typescript
public readonly softwareSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#software_source_id DataOciOsManagementHubSoftwareSourceSoftwarePackages#software_source_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name}.

---

##### `displayNameContains`<sup>Optional</sup> <a name="displayNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.displayNameContains"></a>

```typescript
public readonly displayNameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#display_name_contains DataOciOsManagementHubSoftwareSourceSoftwarePackages#display_name_contains}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#filter DataOciOsManagementHubSoftwareSourceSoftwarePackages#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#id DataOciOsManagementHubSoftwareSourceSoftwarePackages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLatest`<sup>Optional</sup> <a name="isLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesConfig.property.isLatest"></a>

```typescript
public readonly isLatest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#is_latest DataOciOsManagementHubSoftwareSourceSoftwarePackages#is_latest}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#name DataOciOsManagementHubSoftwareSourceSoftwarePackages#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#values DataOciOsManagementHubSoftwareSourceSoftwarePackages#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_software_packages#regex DataOciOsManagementHubSoftwareSourceSoftwarePackages#regex}.

---

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles = { ... }
```


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

const dataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources: dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>[]

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter">DataOciOsManagementHubSoftwareSourceSoftwarePackagesFilter</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency">dependency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier">dependencyModifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType">dependencyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependency`<sup>Required</sup> <a name="dependency" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependency"></a>

```typescript
public readonly dependency: string;
```

- *Type:* string

---

##### `dependencyModifier`<sup>Required</sup> <a name="dependencyModifier" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyModifier"></a>

```typescript
public readonly dependencyModifier: string;
```

- *Type:* string

---

##### `dependencyType`<sup>Required</sup> <a name="dependencyType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.dependencyType"></a>

```typescript
public readonly dependencyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependencies</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified">timeModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `timeModified`<sup>Required</sup> <a name="timeModified" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.timeModified"></a>

```typescript
public readonly timeModified: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFiles</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files">files</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest">isLatest</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate">lastModifiedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies">osFamilies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes">sizeInBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.dependencies"></a>

```typescript
public readonly dependencies: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsDependenciesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `files`<sup>Required</sup> <a name="files" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.files"></a>

```typescript
public readonly files: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsFilesList</a>

---

##### `isLatest`<sup>Required</sup> <a name="isLatest" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.isLatest"></a>

```typescript
public readonly isLatest: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastModifiedDate`<sup>Required</sup> <a name="lastModifiedDate" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.lastModifiedDate"></a>

```typescript
public readonly lastModifiedDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osFamilies`<sup>Required</sup> <a name="osFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.osFamilies"></a>

```typescript
public readonly osFamilies: string[];
```

- *Type:* string[]

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.sizeInBytes"></a>

```typescript
public readonly sizeInBytes: string;
```

- *Type:* string

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux">isMandatoryForAutonomousLinux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType">softwareSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isMandatoryForAutonomousLinux`<sup>Required</sup> <a name="isMandatoryForAutonomousLinux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.isMandatoryForAutonomousLinux"></a>

```typescript
public readonly isMandatoryForAutonomousLinux: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `softwareSourceType`<sup>Required</sup> <a name="softwareSourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.softwareSourceType"></a>

```typescript
public readonly softwareSourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsSoftwareSources</a>

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get"></a>

```typescript
public get(index: number): DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciOsManagementHubSoftwareSourceSoftwarePackages } from 'rhizo-co-terraform-provider-oci'

new dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceSoftwarePackages.DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection">DataOciOsManagementHubSoftwareSourceSoftwarePackagesSoftwarePackageCollection</a>

---



