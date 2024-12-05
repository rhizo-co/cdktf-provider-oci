# `dataOciJmsFleetInstallationSites` Submodule <a name="`dataOciJmsFleetInstallationSites` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetInstallationSites <a name="DataOciJmsFleetInstallationSites" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites oci_jms_fleet_installation_sites}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites(scope: Construct, id: string, config: DataOciJmsFleetInstallationSitesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig">DataOciJmsFleetInstallationSitesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig">DataOciJmsFleetInstallationSitesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath">resetInstallationPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution">resetJreDistribution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus">resetJreSecurityStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor">resetJreVendor</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion">resetJreVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId">resetManagedInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily">resetOsFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains">resetPathContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd">resetTimeEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart">resetTimeStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciJmsFleetInstallationSitesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]

---

##### `resetApplicationId` <a name="resetApplicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstallationPath` <a name="resetInstallationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetInstallationPath"></a>

```typescript
public resetInstallationPath(): void
```

##### `resetJreDistribution` <a name="resetJreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreDistribution"></a>

```typescript
public resetJreDistribution(): void
```

##### `resetJreSecurityStatus` <a name="resetJreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreSecurityStatus"></a>

```typescript
public resetJreSecurityStatus(): void
```

##### `resetJreVendor` <a name="resetJreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVendor"></a>

```typescript
public resetJreVendor(): void
```

##### `resetJreVersion` <a name="resetJreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetJreVersion"></a>

```typescript
public resetJreVersion(): void
```

##### `resetManagedInstanceId` <a name="resetManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetManagedInstanceId"></a>

```typescript
public resetManagedInstanceId(): void
```

##### `resetOsFamily` <a name="resetOsFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetOsFamily"></a>

```typescript
public resetOsFamily(): void
```

##### `resetPathContains` <a name="resetPathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetPathContains"></a>

```typescript
public resetPathContains(): void
```

##### `resetTimeEnd` <a name="resetTimeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeEnd"></a>

```typescript
public resetTimeEnd(): void
```

##### `resetTimeStart` <a name="resetTimeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.resetTimeStart"></a>

```typescript
public resetTimeStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciJmsFleetInstallationSites resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciJmsFleetInstallationSites to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciJmsFleetInstallationSites that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetInstallationSites to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection">installationSiteCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput">fleetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput">installationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput">jreDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput">jreSecurityStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput">jreVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput">jreVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput">managedInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput">osFamilyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput">pathContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput">timeEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput">timeStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId">fleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath">installationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution">jreDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor">jreVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion">jreVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily">osFamily</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains">pathContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd">timeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart">timeStart</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filter"></a>

```typescript
public readonly filter: DataOciJmsFleetInstallationSitesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList">DataOciJmsFleetInstallationSitesFilterList</a>

---

##### `installationSiteCollection`<sup>Required</sup> <a name="installationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationSiteCollection"></a>

```typescript
public readonly installationSiteCollection: DataOciJmsFleetInstallationSitesInstallationSiteCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciJmsFleetInstallationSitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]

---

##### `fleetIdInput`<sup>Optional</sup> <a name="fleetIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetIdInput"></a>

```typescript
public readonly fleetIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `installationPathInput`<sup>Optional</sup> <a name="installationPathInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPathInput"></a>

```typescript
public readonly installationPathInput: string;
```

- *Type:* string

---

##### `jreDistributionInput`<sup>Optional</sup> <a name="jreDistributionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistributionInput"></a>

```typescript
public readonly jreDistributionInput: string;
```

- *Type:* string

---

##### `jreSecurityStatusInput`<sup>Optional</sup> <a name="jreSecurityStatusInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatusInput"></a>

```typescript
public readonly jreSecurityStatusInput: string;
```

- *Type:* string

---

##### `jreVendorInput`<sup>Optional</sup> <a name="jreVendorInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendorInput"></a>

```typescript
public readonly jreVendorInput: string;
```

- *Type:* string

---

##### `jreVersionInput`<sup>Optional</sup> <a name="jreVersionInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersionInput"></a>

```typescript
public readonly jreVersionInput: string;
```

- *Type:* string

---

##### `managedInstanceIdInput`<sup>Optional</sup> <a name="managedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceIdInput"></a>

```typescript
public readonly managedInstanceIdInput: string;
```

- *Type:* string

---

##### `osFamilyInput`<sup>Optional</sup> <a name="osFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamilyInput"></a>

```typescript
public readonly osFamilyInput: string[];
```

- *Type:* string[]

---

##### `pathContainsInput`<sup>Optional</sup> <a name="pathContainsInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContainsInput"></a>

```typescript
public readonly pathContainsInput: string;
```

- *Type:* string

---

##### `timeEndInput`<sup>Optional</sup> <a name="timeEndInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEndInput"></a>

```typescript
public readonly timeEndInput: string;
```

- *Type:* string

---

##### `timeStartInput`<sup>Optional</sup> <a name="timeStartInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStartInput"></a>

```typescript
public readonly timeStartInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `installationPath`<sup>Required</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.installationPath"></a>

```typescript
public readonly installationPath: string;
```

- *Type:* string

---

##### `jreDistribution`<sup>Required</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreDistribution"></a>

```typescript
public readonly jreDistribution: string;
```

- *Type:* string

---

##### `jreSecurityStatus`<sup>Required</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreSecurityStatus"></a>

```typescript
public readonly jreSecurityStatus: string;
```

- *Type:* string

---

##### `jreVendor`<sup>Required</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVendor"></a>

```typescript
public readonly jreVendor: string;
```

- *Type:* string

---

##### `jreVersion`<sup>Required</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.jreVersion"></a>

```typescript
public readonly jreVersion: string;
```

- *Type:* string

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `osFamily`<sup>Required</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.osFamily"></a>

```typescript
public readonly osFamily: string[];
```

- *Type:* string[]

---

##### `pathContains`<sup>Required</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.pathContains"></a>

```typescript
public readonly pathContains: string;
```

- *Type:* string

---

##### `timeEnd`<sup>Required</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

---

##### `timeStart`<sup>Required</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSites.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetInstallationSitesConfig <a name="DataOciJmsFleetInstallationSitesConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesConfig: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId">fleetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath">installationPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution">jreDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus">jreSecurityStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor">jreVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion">jreVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily">osFamily</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains">pathContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd">timeEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart">timeStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#fleet_id DataOciJmsFleetInstallationSites#fleet_id}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#application_id DataOciJmsFleetInstallationSites#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciJmsFleetInstallationSitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#filter DataOciJmsFleetInstallationSites#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#id DataOciJmsFleetInstallationSites#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installationPath`<sup>Optional</sup> <a name="installationPath" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.installationPath"></a>

```typescript
public readonly installationPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#installation_path DataOciJmsFleetInstallationSites#installation_path}.

---

##### `jreDistribution`<sup>Optional</sup> <a name="jreDistribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreDistribution"></a>

```typescript
public readonly jreDistribution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_distribution DataOciJmsFleetInstallationSites#jre_distribution}.

---

##### `jreSecurityStatus`<sup>Optional</sup> <a name="jreSecurityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreSecurityStatus"></a>

```typescript
public readonly jreSecurityStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_security_status DataOciJmsFleetInstallationSites#jre_security_status}.

---

##### `jreVendor`<sup>Optional</sup> <a name="jreVendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVendor"></a>

```typescript
public readonly jreVendor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_vendor DataOciJmsFleetInstallationSites#jre_vendor}.

---

##### `jreVersion`<sup>Optional</sup> <a name="jreVersion" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.jreVersion"></a>

```typescript
public readonly jreVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#jre_version DataOciJmsFleetInstallationSites#jre_version}.

---

##### `managedInstanceId`<sup>Optional</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#managed_instance_id DataOciJmsFleetInstallationSites#managed_instance_id}.

---

##### `osFamily`<sup>Optional</sup> <a name="osFamily" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.osFamily"></a>

```typescript
public readonly osFamily: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#os_family DataOciJmsFleetInstallationSites#os_family}.

---

##### `pathContains`<sup>Optional</sup> <a name="pathContains" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.pathContains"></a>

```typescript
public readonly pathContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#path_contains DataOciJmsFleetInstallationSites#path_contains}.

---

##### `timeEnd`<sup>Optional</sup> <a name="timeEnd" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeEnd"></a>

```typescript
public readonly timeEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_end DataOciJmsFleetInstallationSites#time_end}.

---

##### `timeStart`<sup>Optional</sup> <a name="timeStart" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesConfig.property.timeStart"></a>

```typescript
public readonly timeStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#time_start DataOciJmsFleetInstallationSites#time_start}.

---

### DataOciJmsFleetInstallationSitesFilter <a name="DataOciJmsFleetInstallationSitesFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesFilter: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#name DataOciJmsFleetInstallationSites#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#values DataOciJmsFleetInstallationSites#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_installation_sites#regex DataOciJmsFleetInstallationSites#regex}.

---

### DataOciJmsFleetInstallationSitesInstallationSiteCollection <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollection: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection = { ... }
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollectionItems: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems = { ... }
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems = { ... }
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct = { ... }
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre = { ... }
```


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

const dataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem: dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetInstallationSitesFilterList <a name="DataOciJmsFleetInstallationSitesFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetInstallationSitesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>[]

---


### DataOciJmsFleetInstallationSitesFilterOutputReference <a name="DataOciJmsFleetInstallationSitesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciJmsFleetInstallationSitesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesFilter">DataOciJmsFleetInstallationSitesFilter</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStruct</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution">distribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey">jreKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor">vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.distribution"></a>

```typescript
public readonly distribution: string;
```

- *Type:* string

---

##### `jreKey`<sup>Required</sup> <a name="jreKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.jreKey"></a>

```typescript
public readonly jreKey: string;
```

- *Type:* string

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.vendor"></a>

```typescript
public readonly vendor: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJre</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family">family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount">managedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `family`<sup>Required</sup> <a name="family" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.family"></a>

```typescript
public readonly family: string;
```

- *Type:* string

---

##### `managedInstanceCount`<sup>Required</sup> <a name="managedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.managedInstanceCount"></a>

```typescript
public readonly managedInstanceCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystem</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount">approximateApplicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist">blocklist</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey">installationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre">jre</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId">managedInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus">securityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen">timeLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `approximateApplicationCount`<sup>Required</sup> <a name="approximateApplicationCount" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.approximateApplicationCount"></a>

```typescript
public readonly approximateApplicationCount: number;
```

- *Type:* number

---

##### `blocklist`<sup>Required</sup> <a name="blocklist" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.blocklist"></a>

```typescript
public readonly blocklist: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsBlocklistStructList</a>

---

##### `installationKey`<sup>Required</sup> <a name="installationKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.installationKey"></a>

```typescript
public readonly installationKey: string;
```

- *Type:* string

---

##### `jre`<sup>Required</sup> <a name="jre" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.jre"></a>

```typescript
public readonly jre: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsJreList</a>

---

##### `managedInstanceId`<sup>Required</sup> <a name="managedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.managedInstanceId"></a>

```typescript
public readonly managedInstanceId: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOperatingSystemList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `securityStatus`<sup>Required</sup> <a name="securityStatus" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.securityStatus"></a>

```typescript
public readonly securityStatus: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeLastSeen`<sup>Required</sup> <a name="timeLastSeen" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.timeLastSeen"></a>

```typescript
public readonly timeLastSeen: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItems</a>

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionList <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get"></a>

```typescript
public get(index: number): DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference <a name="DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciJmsFleetInstallationSites } from 'rhizo-co-terraform-provider-oci'

new dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList">DataOciJmsFleetInstallationSitesInstallationSiteCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciJmsFleetInstallationSitesInstallationSiteCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetInstallationSites.DataOciJmsFleetInstallationSitesInstallationSiteCollection">DataOciJmsFleetInstallationSitesInstallationSiteCollection</a>

---



